import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Terms and Conditions.",
  }

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
      <p className="text-gray-700 mb-4">
        Please read these Terms and Conditions carefully before using our online
        store, which is in compliance with Google App Store policies. By
        accessing or using our online store, you agree to be bound by these
        Terms and Conditions. If you do not agree to all of the terms and
        conditions, then you may not use our online store.
      </p>

      <ol className="list-decimal pl-6">
        <li className="text-gray-700 mb-4">
          Use of Online Store: Our online store is intended for personal use
          only. You may not use our online store for any commercial purpose
          without our express written consent.
        </li>
        <li className="text-gray-700 mb-4">
          Product Availability and Pricing: All products are subject to
          availability. We reserve the right to discontinue any product at any
          time. We also reserve the right to change the pricing of any product
          at any time without notice.
        </li>
        <li className="text-gray-700 mb-4">
          Payment and Shipping: Payment must be made in full before any order is
          shipped. We accept payment by credit card, debit card, or other
          payment methods as indicated on our online store. Shipping and
          handling charges will be added to your order. We will ship your order
          to the shipping address you provide during the checkout process.
        </li>
        <li className="text-gray-700 mb-4">
          Returns and Refunds: If you are not satisfied with your purchase, you
          may return it within 14 days for a refund or exchange. The product
          must be in its original packaging and in new condition. We reserve the
          right to refuse a refund or exchange if the product is not returned in
          its original condition. Shipping and handling charges are
          non-refundable.
        </li>
        <li className="text-gray-700 mb-4">
          Intellectual Property: All content on our online store, including but
          not limited to text, graphics, logos, images, and software, is the
          property of Veda Sakthi Online Store or its content suppliers and is
          protected by United States and international copyright laws. You may
          not use any content on our online store without our express written
          consent.
        </li>
        <li className="text-gray-700 mb-4">
          Disclaimer of Warranties: Our online store is provided on an “as is”
          and “as available” basis. We make no representations or warranties of
          any kind, express or implied, as to the operation of our online store
          or the information, content, materials, or products included on our
          online store. You expressly agree that your use of our online store is
          at your sole risk.
        </li>
        <li className="text-gray-700 mb-4">
          Limitation of Liability: We will not be liable for any damages of any
          kind arising from the use of our online store, including but not
          limited to direct, indirect, incidental, punitive, and consequential
          damages.
        </li>
        <li className="text-gray-700 mb-4">
          Indemnification: You agree to indemnify, defend, and hold harmless
          Veda Sakthi Online Store and its affiliates, officers, directors,
          employees, agents, and licensors from and against any and all claims,
          damages, liabilities, costs, and expenses, including reasonable
          attorneys’ fees, arising from or related to your use of our online
          store.
        </li>
        <li className="text-gray-700 mb-4">
          Governing Law: These Terms and Conditions shall be governed by and
          construed in accordance with the laws of the United States and the
          State of California, without giving effect to any principles of
          conflicts of law.
        </li>
        <li className="text-gray-700 mb-4">
          Changes to Terms and Conditions: We may update these Terms and
          Conditions from time to time, and any changes will be posted on this
          page. Your continued use of our online store after any changes
          indicates your acceptance of the new Terms and Conditions.
        </li>
      </ol>

      <p className="text-gray-700 mb-4">
        Effective Date: These Terms and Conditions are effective as of April 23,
        2023, and are in compliance with Google App Store policies.
      </p>
    </div>
  )
}

export default TermsAndConditions
