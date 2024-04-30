import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <div data-testid=" w-full" className="w-[280px] mt-5 md:mt-0 lg:mt-0">
    <Thumbnail
      productPreview={pricedProduct}
      thumbnail={productPreview?.thumbnail}
      size="small"
      isFeatured={isFeatured}
    />
    <LocalizedClientLink href={`/products/${productPreview?.handle}`}>
    <div className="flex flex-col w-full mt-4 text-center text-sm font-medium cursor-pointer">
      <Text className="" data-testid="product-title">
        {productPreview?.title}
      </Text>
      <Text className="text-[11px] text-gray-400 pt-1" data-testid="product-subtitle">
        {pricedProduct?.subtitle }
      </Text>
      <div className="flex items-center justify-center gap-x-2">
        {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
      </div>
    </div>
    </LocalizedClientLink>
  </div>
  )
}