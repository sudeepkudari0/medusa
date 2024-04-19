"use client"

import { Text } from "@medusajs/ui"

import { ProductCollectionWithPreviews, ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useRouter } from "next/navigation"

export default function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: PricedProduct | null
  isFeatured?: boolean
  region: Region
}) {
  const { cheapestPrice } = getProductPrice({
    product: productPreview as PricedProduct,
    region,
  })

  const router = useRouter()

  return (
    <div data-testid=" w-full" className="w-auto">
        <Thumbnail
          productPreview={productPreview}
          thumbnail={productPreview?.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col mt-4 text-center text-sm font-medium" onClick={() => router.push(`/products/${productPreview?.handle}`)}>
          <Text className="" data-testid="product-title">
            {productPreview?.title}
          </Text>
          <Text className="text-[11px] text-gray-400 pt-1" data-testid="product-subtitle">
            {productPreview?.subtitle }
          </Text>
          <div className="flex items-center justify-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
  )
}
