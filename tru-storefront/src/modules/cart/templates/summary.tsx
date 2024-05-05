"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Summary
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals data={cart} />
      <LocalizedClientLink
        href={"/checkout?step=" + cart.checkout_step}
        data-testid="checkout-button"
      >
        <Button
          variant="secondary"
          isLoading={isLoading}
          className="w-full h-10 text-white rounded bg-green-600 hover:bg-green-700"
          onClick={() => setIsLoading(true)}
        >
          Go to checkout
        </Button>{" "}
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
