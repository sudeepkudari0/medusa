import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col md:flex-row lg:flex-row">
      <div className="flex items-center h-full p-8">
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
      <div className="flex flex-col w-full text-md text-gray-400  items-center h-full p-4 lg:px-20">
        <div className="h-full flex items-center justify-center">
          <h1 className="text-center md:text-left lg:text-left lg:px-10">
            Welcome to TrU Ecommerce, where the convenience of online shopping
            meets the essence of organic living. We are dedicated to bringing
            you a curated selection of premium organic products, all available
            at your fingertips.
          </h1>
        </div>
        <div className="flex flex-row text-sm  justify-center md:justify-start lg:justify-start mt-4">
          <LocalizedClientLink
            href="/about-us"
            className=" mx-2 hover:text-yellow-500"
          >
            About Us
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/contact-us"
            className=" mx-2 hover:text-yellow-500"
          >
            Contact Us
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/returns-policy"
            className=" mx-2 hover:text-yellow-500"
          >
            Returns Policy
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/privacy-statement"
            className=" mx-2 hover:text-yellow-500"
          >
            Privacy Statement
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/terms-and-conditions"
            className=" mx-2 hover:text-yellow-500"
          >
            Terms and Conditions
          </LocalizedClientLink>
        </div>
        <div>
          <p className="mx-2 text-sm p-4">© 2024 ThinkRoman Ventures LLP</p>
        </div>
      </div>
      <div className="flex flex-col text-white justify-center items-center h-full p-4">
        <div className="flex flex-row justify-center md:justify-start lg:justify-start">
          <LocalizedClientLink href="/" className="text-white mx-2">
            <FaInstagram />
          </LocalizedClientLink>
          <LocalizedClientLink href="/" className="text-white mx-2">
            <FaTwitter />
          </LocalizedClientLink>
          <LocalizedClientLink href="/" className="text-white mx-2">
            <FaYoutube />
          </LocalizedClientLink>
        </div>
        <div className="flex flex-row justify-center md:justify-start lg:justify-start mt-4"></div>
      </div>
    </footer>
  )
}
