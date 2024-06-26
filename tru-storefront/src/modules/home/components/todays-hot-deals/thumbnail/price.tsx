import { Text, clx } from "@medusajs/ui"

import { PriceType } from "@modules/products/components/product-actions"

export default function HotDealsPreviewPrice({ price }: { price: PriceType }) {
  return (
    <div className="flex flex-row gap-2">
      {price.price_type === "sale" && (
        <Text
          className="line-through text-ui-fg-muted w-full"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <div
        className={clx(
          "text-ui-fg-muted flex flex-row w-full items-center justify-center gap-2",
          {
            "text-ui-fg-interactive": price.price_type === "sale",
          }
        )}
        data-testid="price"
      >
        <p className="text-md text-white font-semibold">
          {price.calculated_price}
        </p>
      </div>
    </div>
  )
}
