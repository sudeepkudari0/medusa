"use client"

import { DropdownMenu } from "@medusajs/ui"
import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { IoMdArrowDropdown } from "react-icons/io"

export const Categories = [
  {
    id: 1,
    title: "Aroma Candles",
    href: "/categories/aroma-candles",
  },
  {
    id: 2,
    title: "Essential Oils",
    href: "/categories/essential-oils",
  },
  {
    id: 3,
    title: "Jaggery",
    href: "/categories/jaggery",
  },
  {
    id: 4,
    title: "Therapeutic Blend",
    href: "/categories/therapeutic-blend",
  },
  {
    id: 5,
    title: "Incense Sticks/Agarbathi",
    href: "/categories/incense-sticks-agarbathi",
  },
  {
    id: 6,
    title: "Honey",
    href: "/categories/honey",
  },
]

export const CategoriesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div className="w-[256px]" 
    onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
      <DropdownMenu modal={false} open={isOpen}>
        <DropdownMenu.Trigger
          className="outline-none border p-[6px] flex flex-row items-center justify-center gap-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          BROWSE CATEGORIES
          <IoMdArrowDropdown />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="z-50">
          {Categories.map((item) => (
            <LocalizedClientLink key={item.id} href={item.href}>
              <DropdownMenu.Item className="text-[16px] font-medium border-b p-4 hover:text-green-600 hover:bg-gray-100">
                {item.title}
              </DropdownMenu.Item>
            </LocalizedClientLink>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}