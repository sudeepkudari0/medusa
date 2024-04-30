"use client"

import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Categories } from "../categories"

export const MenuMobile = [
  {
    id: 1,
    href: "/account",
    title: "MY ACCOUNT",
  },
  {
    id: 2,
    href: "/",
    title: "HOME",
  },
  {
    id: 3,
    href: "/store",
    title: "SHOP",
  },
  {
    id: 4,
    href: "/contact-us",
    title: "CONTACT US",
  },
  {
    id: 5,
    href: "/about-us",
    title: "ABOUT US",
  },
]

const TabsMobile = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <div>
      <Tabs
        defaultValue={"FEATURED"}
        selectedIndex={activeTabIndex}
        className={"lg:px-[150px]"}
        onSelect={(index) => setActiveTabIndex(index)}
      >
        <TabList
          className={"flex flex-row items-center justify-between w-full"}
        >
          <Tab
            key={"menu"}
            value={"menu"}
            className={clx(
              "text-sm p-4 text-center text-gray-400 font-medium w-full cursor-pointer",
              activeTabIndex === 0 ? "bg-gray-200" : "bg-gray-100",
              "border-b border-transparent transition duration-300 ease-in-out",
              activeTabIndex === 0
                ? "border-b-2 text-gray-800 border-green-600"
                : "hover:border-b-2 hover:text-gray-800 hover:border-green-600"
            )}
          >
            MENU
          </Tab>
          <Tab
            key={"Categories"}
            value={"Categories"}
            className={clx(
              "text-sm p-4 text-center text-gray-400 font-medium w-full cursor-pointer",
              activeTabIndex === 1 ? "bg-gray-200" : "bg-gray-100",
              "border-b border-transparent transition duration-300 ease-in-out",
              activeTabIndex === 1
                ? "border-b-2 text-gray-800 border-green-600"
                : "hover:border-b-2 hover:text-gray-800 hover:border-green-600"
            )}
          >
            Categories
          </Tab>
        </TabList>
        <TabPanel key={"menu"} value={"menu"}>
          <div className="flex flex-col p-4 gap-8 text-sm">
            {MenuMobile.map((item) => (
              <LocalizedClientLink
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </LocalizedClientLink>
            ))}
          </div>
        </TabPanel>
        <TabPanel key={"Categories"} value={"Categories"}>
          <div className="flex flex-col p-4 gap-8 text-sm">
            {Categories.map((item) => (
              <LocalizedClientLink
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </LocalizedClientLink>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default TabsMobile
