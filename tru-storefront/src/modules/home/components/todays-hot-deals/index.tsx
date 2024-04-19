"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductPreview from "@modules/products/components/product-preview"
import { useState } from "react"
import ReactSimplyCarousel from "react-simply-carousel"
import HotDealsThumbnail from "./thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getProductPrice } from "@lib/util/get-product-price"
import { ProductCollectionWithPreviews } from "types/global"

const TodaysHotDeals = ({
  allProductsData,
  region,
  collections,
}: {
  allProductsData: (PricedProduct | null)[]
  region: Region
  collections: ProductCollectionWithPreviews[]
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <div className="w-full pt-10 pb-20 lg:px-[150px]">
      <div className="w-full flex items-center justify-center border-b border-black mb-4">
        <h1 className="text-3xl font-bold border-b-2 border-green-600 ">
          TODAY HOT DEALS
        </h1>
      </div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 768,
          },
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 640,
          },
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 1024,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {allProductsData
          .filter((product) => product?.collection?.title === "TODAY HOT DEALS")
          .map((filteredProduct, index) => (
            <div
              key={index}
              className="w-[300px] lg:w-[380px] md:w-[400px] p-2"
            >
              <HotDealsThumbnail
                region={region}
                productPreview={filteredProduct}
                thumbnail={filteredProduct?.thumbnail}
                size="square"
              />
            </div>
          ))}
      </ReactSimplyCarousel>
      <div className="flex items-center justify-center pt-[50px]">
        <LocalizedClientLink
          href={"/store"}
          className="bg-green-600 text-white font-medium p-3"
        >
          VIEW ALL DEALS
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default TodaysHotDeals
