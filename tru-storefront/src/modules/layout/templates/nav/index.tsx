"use client"

import { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Image from "next/image"
import { cn } from "@lib/utils"
import { FaCartShopping, FaUser } from "react-icons/fa6"
import { FaRegUserCircle } from "react-icons/fa";
import SearchBarLg from "@modules/layout/components/search-bar-lg"
import { CategoriesDropDown } from "@modules/layout/components/categories"

export default function Nav() {
  return (
    <div className="hidden lg:block sticky top-0 inset-x-0 z-50 group">
      <header
        className={cn(
          "relative flex flex-col mx-auto border-b duration-200 bg-gradient-to-r from-[#f8e4c4] to-[#f5efe7] border-ui-border-base",
        )}
      >
        <nav className="p-3 content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full text-small-regular">
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className=" lg:ml-[100px]"
              data-testid="nav-store-link"
            >
              <Image
                src={
                  "https://drive.google.com/uc?id=1dO0QWEuvSixKxXhQrVrjWXCh3KBz4QB4"
                }
                width={500}
                height={500}
                alt="Logo"
                className={cn(
                  "w-[220px] h-[60px]",
                )}
              />
            </LocalizedClientLink>
          </div>
          <div className="hidden w-full md:hidden lg:flex lg:flex-row">
            <SearchBarLg />
          </div>
          <div className="flex items-center justify-center gap-x-6 h-full flex-1 basis-0">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className=" text-sm flex flex-row items-center justify-center"
                href="/account"
                data-testid="nav-account-link"
              >
                <FaRegUserCircle color="#10bb36" size={19} />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className=" flex"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <FaCartShopping color="#10bb36" size={20} /> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
      <nav className="flex items-center justify-between h-[40px] bg-[#fbf9f5]">
        <div className="flex items-center justify-center w-[400px]">
          <CategoriesDropDown />
        </div>
        <div className="flex flex-row text-sm items-center justify-center w-full gap-4">
          <LocalizedClientLink
            className="hover:text-green-600"
            href="/account"
            data-testid="nav-account-link"
          >
            MY ACCOUNT
          </LocalizedClientLink>
          <LocalizedClientLink className="hover:text-green-600" href="/">
            HOME
          </LocalizedClientLink>
          <LocalizedClientLink className="hover:text-green-600" href="/store">
            SHOP
          </LocalizedClientLink>
          <LocalizedClientLink className="hover:text-green-600" href="/about-us">
            ABOUT US
          </LocalizedClientLink>
          <LocalizedClientLink className="hover:text-green-600" href="/contact-us">
            CONTACT US
          </LocalizedClientLink>
        </div>
      </nav>
    </div>
  )
}
