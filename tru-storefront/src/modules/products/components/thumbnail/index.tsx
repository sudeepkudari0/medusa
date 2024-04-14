"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import { Button, Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React, { useEffect, useMemo, useState } from "react"
import { SlBasket } from "react-icons/sl"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Tabs } from "@medusajs/ui"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { addToCart } from "@modules/cart/actions"
import { useParams } from "next/navigation"
import { cn } from "@lib/util"
import { ClipLoader } from "react-spinners"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  pricedProduct: PricedProduct
  handle: string | null
  "data-testid"?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  pricedProduct,
  handle,
  "data-testid": dataTestid,
}) => {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [showAddToCart, setShowAddToCart] = useState(false)
  const [showAddBasket, setShowAddBasket] = useState(false)
  const initialImage = thumbnail || images?.[0]?.url
  const [isAdding, setIsAdding] = useState(false)
  // const [discount, setDiscount] = useState<string>(pricedProduct.subtitle as string || "")
  const countryCode = useParams().countryCode as string

  const handleAddToCart = async () => {
    if (!pricedProduct.variants[0]?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: pricedProduct.variants[0]?.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }

  return (
    <div>
      <Container
        className={clx(
          "relative w-full overflow-hidden p-4 pl-0 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150",
          className,
          {
            "aspect-[11/14]": isFeatured,
            "aspect-[9/16]": !isFeatured && size !== "square",
            "aspect-[1/1]": size === "square",
            "w-[180px]": size === "small",
            "w-[290px]": size === "medium",
            "w-[440px]": size === "large",
            "w-full": size === "full",
          }
        )}
        data-testid={dataTestid}
        onMouseEnter={() => setShowAddToCart(true)}
        onMouseLeave={() => setShowAddToCart(false)}
      >
        <div>
          <LocalizedClientLink href={`/products/${handle}`} className="group">
            <ImageOrPlaceholder image={initialImage} size={size} />
          </LocalizedClientLink>
          <button
            disabled={isAdding}
            className={cn(
              "absolute bottom-0 w-full h-[50px] bg-green-500 text-white text-md font-bold z-10 transition-all duration-300 ease-out transform",
              "hover:bg-green-700",
              showAddToCart
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
            onMouseEnter={() => setShowAddBasket(true)}
            onMouseLeave={() => setShowAddBasket(false)}
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={cn(
              "absolute bottom-0 w-full h-[50px] bg-green-700 text-white text-md font-bold z-10 transition-all duration-300 ease-out transform",
              showAddBasket
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
            onMouseMove={() => setShowAddBasket(true)}
            onMouseLeave={() => setShowAddBasket(false)}
          >
            {isAdding ? (
              <ClipLoader color="white" size={24} />
            ) : (
              <SlBasket
                size={24}
                className="m-auto text-center w-full fonr-bold"
              />
            )}
          </button>
        </div>
      </Container>
    </div>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center"
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
