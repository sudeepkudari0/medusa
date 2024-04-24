"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React, { useState } from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { addToCart } from "@modules/cart/actions"
import { useParams } from "next/navigation"
import { SlBasket } from "react-icons/sl"
import { ClipLoader } from "react-spinners"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useQueryClient } from "@tanstack/react-query"
import { ProductPreviewType } from "types/global"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  'data-testid'?: string
  productPreview?: PricedProduct | null
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  productPreview,
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  'data-testid': dataTestid
}) => {
  const initialImage = thumbnail || images?.[0]?.url
  const [isAdding, setIsAdding] = React.useState(false)
  const [showAddToCart, setShowAddToCart] = useState(false)
  const [showAddBasket, setShowAddBasket] = useState(false)
  
  const countryCode = useParams().countryCode as string
  const queryClient = useQueryClient();
  const handleAddToCart = async () => {
    if (!productPreview?.variants[0]?.id) return null
    setShowAddBasket(true)
    setIsAdding(true)

    await addToCart({
      variantId: productPreview.variants[0]?.id,
      quantity: 1,
      countryCode
    })
    queryClient.invalidateQueries(['customCart'])
    setIsAdding(false)
    setShowAddBasket(false)
    setShowAddToCart(false)
  }
  return (
    <Container
      className={clx(
        "relative w-full rounded-none overflow-hidden p-4 pl-0 bg-ui-bg-subtle shadow-elevation-card-rest group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/16]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[280px] h-[300px]": size === "small",
          "w-[260px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
          onMouseEnter={() => setShowAddToCart(true)}
        onMouseLeave={() => setShowAddToCart(false)}
    >
       <LocalizedClientLink
        href={`/products/${productPreview?.handle}`}
        className="group"
      >
      <ImageOrPlaceholder image={initialImage} size={size} />
      </LocalizedClientLink>
      {productPreview?.metadata?.discount as string && ( 
          <span
            className={`absolute top-0 left-0 mt-3 ml-3 py-2 px-1 pl-0 text-sm font-medium text-white  bg-green-500 rounded-full shadow-sm`} // Tailwind classes for badge styling
          >
            -{productPreview?.metadata?.discount as string}%  
          </span>
        )}
         <button
          type="button"
            disabled={isAdding}
            className={clx(
              "absolute bottom-0 w-full h-[40px] bg-opacity-75 bg-green-500 text-white text-md font-bold z-10 transition-all duration-300 ease-out transform",
              "hover:bg-green-700",
              showAddToCart
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
            onMouseEnter={() => setShowAddBasket(true)}
            onMouseLeave={() => {
              if (!isAdding) setShowAddBasket(false)
            }}          
            >
            Add to Cart
          </button>
          <button
          type="button"
            onClick={handleAddToCart}
            disabled={isAdding}
            className={clx(
              "absolute bottom-0 w-full h-[40px] bg-green-500 text-white text-md font-bold z-10 transition-all duration-300 ease-out transform",
              showAddBasket
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
            onMouseMove={() => setShowAddBasket(true)}
            onMouseLeave={() => {
              if (!isAdding) setShowAddBasket(false)
            }}
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
    </Container>
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
      className={clx("absolute inset-0 object-fit object-center")}
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
