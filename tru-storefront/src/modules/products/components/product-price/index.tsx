import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-row gap-3 text-ui-fg-base">
         {selectedPrice.price_type === "sale" && (
        <>
          <p>
            <span
              className="line-through font-semibold text-xl text-gray-300"
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </p>
        </>
      )}
      <span
        className={clx("text-xl-semi ", {
          "text-ui-fg-interactive": selectedPrice.price_type === "sale",
        })}
      >
        <span
          data-testid="product-price"
          className="font-semibold text-2xl text-green-600"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </span>
      </span>
   
    </div>
  )
}
