"use client"

import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import ProductPrice from "@modules/products/components/product-price";
import { isEqual } from "lodash";
import { useMemo, useState } from "react";

type ProductInfoProps = {
  product: PricedProduct;
  region: Region;
};

const ProductInfo = ({ product, region }: ProductInfoProps) => {
  const [options, setOptions] = useState<Record<string, string>>({})

  const variants = product.variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])
  
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])
  
  const renderParagraphs = (text: string) => {
    return text?.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-2 mt-2">
        {paragraph}
      </p>
    ));
  };

  const renderBulletPoints = (text: string) => {
    return (
      <ul className="list-disc list-inside mb-4">
        {text?.split("\n").map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    );
  };

  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4  mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">
          {product.title}
        </Heading>
        <ProductPrice product={product} variant={variant} region={region} />
        <div className="text-medium text-ui-fg-subtle" data-testid="product-description">
          {product.description?.includes("\n") ? (
            <>
            <h1 className="text-2xl font-semibold">About this item</h1>
              {renderParagraphs(product.description.split("\n\n")[0])}
              {renderBulletPoints(product.description.split("\n\n")[1])}
            </>
          ) : (
            renderParagraphs(product.description || "")
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
