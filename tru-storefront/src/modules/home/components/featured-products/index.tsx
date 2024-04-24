"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Text, clx } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { useState } from "react"
export default function FeaturedProducts({
  collections,
  region,
  allProductsData,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
  allProductsData: (PricedProduct | null)[]
}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <div className="flex flex-row">
      <div className="w-full px-4">
        <Tabs
          defaultValue={"FEATURED"}
          selectedIndex={activeTabIndex}
          className={"lg:px-[150px]"}
          onSelect={(index) => setActiveTabIndex(index)}
        >
          <TabList className=" flex flex-col lg:flex-row md:flex-row border-b space-x-10">
            <div>
              <Tab
                key={-1}
                value={-1}
                disabled
                className="text-2xl text-center text-black font-bold border-b-2 border-green-600 outline-none"
              >
                ALL PRODUCTS
              </Tab>
            </div>
            <div className="flex flex-row focus:shadow-none shadow-none gap-6">
              {collections
                .filter((collection) => collection.title !== "TODAY HOT DEALS")
                .map((data, index) => (
                  <Tab
                    key={collections[index].id}
                    value={data.title}
                    className={clx(
                      "cursor-pointer outline-none font-bold pt-1",
                      index === activeTabIndex && "text-green-600"
                    )}
                  >
                    {data.title}
                  </Tab>
                ))}
            </div>
          </TabList>

          <div className="mt-2">
            {collections
              .filter((collection) => collection.title !== "TODAY HOT DEALS")
              .map((collection) => (
                <TabPanel key={collection.id} value={collection.id}>
                  <div className="py-4">
                    <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-x-4 small:gap-y-36">
                      {allProductsData
                        .filter(
                          (product) => product?.collection?.title === collection.title
                        )
                        .map((filteredProduct) => (
                          <li key={filteredProduct?.id} className="w-auto">
                            <ProductPreview
                              productPreview={filteredProduct}
                              region={region}
                              isFeatured
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                </TabPanel>
              ))}
            <TabPanel>dummy</TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  )
  // return collections.map((collection) => (
  //   <li key={collection.id}>
  //     <ProductRail collection={collection} region={region} />
  //   </li>
  // ))
}
