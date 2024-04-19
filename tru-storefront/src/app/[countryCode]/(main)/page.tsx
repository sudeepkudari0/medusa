import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import {
  getCollectionsList,
  getProductRailData,
  getProductsList,
  getRegion,
} from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import DetoxSynergyBlendPromo from "@modules/home/components/detox-synergy-blend-promo"
import EnergySynergyBlendPromo from "@modules/home/components/energy-synergy-blend-promo"
import TodaysHotDeals from "@modules/home/components/todays-hot-deals"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 4)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const data = await getProductRailData({ collection: collections, region })

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts
            collections={collections}
            region={region}
            allProductsData={data}
          />
        </ul>
        <DetoxSynergyBlendPromo />
        <div className="w-full bg-gray-200">
        <TodaysHotDeals collections={collections} allProductsData={data} region={region} />
        </div>
        <EnergySynergyBlendPromo />
      </div>
    </>
  )
}
