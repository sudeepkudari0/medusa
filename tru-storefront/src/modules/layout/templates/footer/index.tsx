"use client"

import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaInstagram, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6"

export default function Footer() {

  const [isFooterSticky, setIsFooterSticky] = useState(false);
  const path = usePathname();
  useEffect(() => {
    function handleScroll() {
      const isPageFull = window.innerHeight >= document.body.scrollHeight;
      setIsFooterSticky(isPageFull);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);
  return (
    <footer className={clx("bg-[#ebeae7] w-full flex flex-col md:flex-row lg:flex-row", 
    isFooterSticky ? "fixed bottom-0" : "relative",
    )}>
      <div className="flex items-center h-full pl-5 p-2">
        <LocalizedClientLink
          href="/"
          className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
          data-testid="nav-store-link"
        >
          <Image
            src={
              "https://drive.google.com/uc?id=1dO0QWEuvSixKxXhQrVrjWXCh3KBz4QB4"
            }
            width={400}
            height={200}
            alt="Logo"
            className={clx("w-full h-full")}
          />
        </LocalizedClientLink>
      </div>
      <div className="flex flex-col w-full text-md text-gray-400  items-center h-full lg:px-20 lg:mt-5">
        <div className="flex flex-col gap-2 md:flex-row text-sm  justify-center md:justify-start lg:justify-start mt-4">
          <div className="flex flex-row gap-2">
          <LocalizedClientLink
            href="/about-us"
            className=" mx-2 hover:text-black"
          >
            About Us
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/contact-us"
            className=" mx-2 hover:text-black"
          >
            Contact Us
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/returns-policy"
            className=" mx-2 hover:text-black"
          >
            Returns Policy
          </LocalizedClientLink>
          </div>
          <div className="flex flex-row gap-2">
          <LocalizedClientLink
            href="/privacy-statement"
            className=" mx-2 hover:text-black"
          >
            Privacy Statement
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/terms-and-conditions"
            className=" mx-2 hover:text-black"
          >
            Terms and Conditions
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/delete-account"
            className=" mx-2 hover:text-black"
          >
            Delete Account
          </LocalizedClientLink>
          </div>
        </div>
        <div>
          <p className="mx-2 text-sm p-4">© 2024 ThinkRoman Ventures LLP</p>
        </div>
      </div>
      <div className="flex flex-col text-white justify-center items-center h-full p-4">
        <div className="flex flex-row justify-center md:justify-start lg:justify-start">
          <LocalizedClientLink href="/" className="text-orange-700 mx-2">
            <FaInstagram size={24} />
          </LocalizedClientLink>
          <LocalizedClientLink href="/" className="text-blue-700 mx-2">
            <FaFacebook size={24} />
          </LocalizedClientLink>
          <LocalizedClientLink href="/" className="text-black mx-2">
            <FaXTwitter size={24} />
          </LocalizedClientLink>
          <LocalizedClientLink href="/" className="text-red-500 mx-2">
            <FaYoutube size={24} />
          </LocalizedClientLink>
        </div>
        <div className="flex flex-row justify-center md:justify-start lg:justify-start mt-4"></div>
      </div>
    </footer>
  )
}
