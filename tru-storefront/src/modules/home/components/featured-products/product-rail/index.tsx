// import { retrievePricedProductById } from "@lib/data"
// import { Region } from "@medusajs/medusa"
// import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
// import { ProductCollection } from "@medusajs/product"
// import { Text } from "@medusajs/ui"

// import InteractiveLink from "@modules/common/components/interactive-link"
// import ProductPreview from "@modules/products/components/product-preview"
// import { ProductCollectionWithPreviews } from "types/global"

// export default async function ProductRail({
//   collection,
//   region,
//   allProductsData
// }: {
//   collection: ProductCollectionWithPreviews
//   region: Region
//   allProductsData: (PricedProduct | null)[]
// }) {
//   const { products } = collection
//   if (!products) {
//     return null
//   }

//   return (
//     <div className="content-container lg:ml-[50px] py-12 small:py-24">
//       <div className="flex justify-between mb-8 pb-2 border-b-2 border-gray-300">
//         <Text className="text-3xl">{collection.title}</Text>
//         <InteractiveLink href={`/collections/${collection.handle}`}>
//           View all
//         </InteractiveLink>
//       </div>
//       <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-x-4 small:gap-y-36">
//         {products &&
//           products.map((product, index) => (
//             <li key={product.id}>
//               <ProductPreview
//                 productPreview={product}
//                 region={region}
//                 isFeatured
//                 // pricedProduct={pricedProducts[index]}
//               />
//             </li>
//           ))}
//       </ul>
//     </div>
//   )
// }
