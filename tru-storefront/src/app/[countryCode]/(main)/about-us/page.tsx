import React from "react"
import Image from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "About Us",
  }

const AboutUs = () => {
  return (
    <div className="container mx-auto lg:px-20 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to TrU- Online Store</h1>
      <Image
        src={"https://drive.google.com/uc?id=1jPhOsv1GkgTTV34Yp9AVHfMfU-SqSLyM"}
        width={200}
        height={180}
        className="w-[180px] h-[140px] object-contain"
        alt="Logo"
      />
      <p className="text-lg leading-relaxed mb-8 mt-4">
        TrU- Online Store, a division of ThinkRoman Ventures LLP, is your
        one-stop shop for the best quality organic products at affordable
        prices. Our mission is to make these products accessible to a larger
        population, empowering everyone to embrace a healthy lifestyle.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-base leading-relaxed">
          TrU- was founded by our Chairman and CEO, who hails from the
          breathtaking land of Kashmir, renowned for its natural beauty and
          abundance of organic products. Inspired by his experiences living
          across continents, our CEO envisioned bringing the finest organic
          products from his homeland to the world.
        </p>
        <p className="text-base leading-relaxed">
          With this vision, he created TrU-, a platform where everyone can
          access high-quality organic products that promote a healthy lifestyle.
          Our CEO&apos;s passion for providing the best at affordable prices has
          been the driving force behind TrU- &apo;s success.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <p className="text-base leading-relaxed">
          Our journey began with Pure Honey from the Nilgiri Hills, renowned for
          its unique taste and medicinal properties. We offer 100% organic, raw,
          and unprocessed honey, ensuring all its nutritional benefits remain
          intact.
        </p>
        <p className="text-base leading-relaxed">
          We also provide Soy Wax for a more sustainable and eco-friendly
          alternative to traditional paraffin wax candles. Our candles, made
          with the finest aromatic oils, create a delightful and relaxing
          ambience.
        </p>
        <p className="text-base leading-relaxed">
          Constantly expanding, we explore new areas of natural and organic
          products. We have sourced some of the best offerings from the region,
          such as Ashwagandha and Turmeric, known for their centuries-old use in
          Ayurveda for reducing inflammation, boosting immunity, and enhancing
          brain function.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-base leading-relaxed">
          At TrU-, we are dedicated to providing you with the best quality
          organic products that are sustainably sourced, environmentally
          friendly, and affordable. We believe everyone deserves access to
          healthy and nutritious products that promote well-being and enhance
          their lifestyle.
        </p>
        <p className="text-base leading-relaxed">
          We go beyond just products. We are committed to promoting healthy
          living and raising awareness of the benefits of organic options. We
          strive to be a trusted source of information and resources for our
          customers, empowering them to make informed choices about their health
          and well-being.
        </p>
      </section>

      <p className="text-lg leading-relaxed">
        Thank you for choosing TrU- as your preferred organic store. We are
        committed to delivering the best products and services, and we look
        forward to being a part of your health and wellness journey.
      </p>
    </div>
  )
}

export default AboutUs
