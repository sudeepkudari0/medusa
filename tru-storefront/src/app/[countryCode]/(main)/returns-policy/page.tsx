import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Returns Policy",
    description: "Returns Policy",
  }

const ReturnsPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
      <p className="text-gray-700 mb-4">
        We want you to be completely satisfied with your purchase from TrU-
        Online Store. If for any reason you are not satisfied, you may return
        the product within 14 days of the purchase date for a refund or
        exchange.
      </p>

      <p className="text-gray-700 mb-4">
        To be eligible for a return or exchange, the product must be in its
        original packaging and in new condition. If the product is not returned
        in its original condition, we reserve the right to refuse a refund or
        exchange. Shipping and handling charges are non-refundable.
      </p>

      <p className="text-gray-700 mb-4">
        To initiate a return or exchange, please email us at{" "}
        <a href="mailto:tru@thinkroman.com" className="text-blue-500">
          tru@thinkroman.com
        </a>{" "}
        with your order number and reason for the return or exchange. We will
        provide you with instructions on how to return the product.
      </p>

      <p className="text-gray-700 mb-4">
        Please note that refunds will be issued to the original payment method
        and may take up to 10 business days to process. Exchanges will be
        shipped to the shipping address provided during the checkout process.
      </p>

      <p className="text-gray-700 mb-4">
        If you receive a defective or damaged product, please contact us within
        48 hours of receiving the product. We will provide you with instructions
        on how to return the product and will send you a replacement product at
        no additional cost.
      </p>

      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about our returns policy, please
        email us at{" "}
        <a href="mailto:tru@thinkroman.com" className="text-blue-500">
          tru@thinkroman.com
        </a>
        .
      </p>
    </div>
  )
}

export default ReturnsPolicy
