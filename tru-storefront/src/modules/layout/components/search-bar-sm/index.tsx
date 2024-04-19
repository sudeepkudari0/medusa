"use client"

import { String } from "cypress/types/lodash"
import { useProducts } from "medusa-react"
import { useEffect, useState } from "react"
import AsyncSelect from "react-select/async"
import { useRouter } from "next/navigation"
import IconSearch from "../search-bar-lg/search-svg"

const SearchBarSm = () => {
  const [searchValue, setSearchValue] = useState<string>()
  const [selectedHandle, setSelectedHandle] = useState<String>()
  const { products, isLoading } = useProducts()
  const [filteredProducts, setFilteredProducts] = useState<
    { label: string; value: string; handle: string }[]
  >([])

  const router = useRouter()

  useEffect(() => {
    if (products) {
      const extractedLabels = products.map((product) => ({
        label: product.title as string,
        value: product.title as string,
        handle: product.handle as string,
      }))
      setFilteredProducts(extractedLabels)
    }
  }, [products])

  const loadOptions = (searchValue: string, callback: any) => {
    if (!isLoading) {
      const filteredOptions = filteredProducts.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
      callback(filteredOptions)
    }
  }

  const CustomDropdownIndicator = () => null

  return (
    <div className="relative flex items-center h-[60px] shadow-md">
      <AsyncSelect
        loadOptions={loadOptions}
        placeholder="Search for products"
        value={
          searchValue
            ? { label: searchValue, value: searchValue, handle: selectedHandle }
            : null
        }
        onChange={(e: any) => {
          setSelectedHandle(e.handle)
          setSearchValue(e.label)
        }}
        className="w-full pl-2 rounded-none !outline-none"
        styles={{
          indicatorSeparator: () => ({ display: "none" }),
          control: () => ({
            outline: "none",
            ":hover": { borderColor: "#aaa" },
          }),
        }}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
      <div
        className="cursor-pointer pr-4 w-[50px]"
        onClick={() => {
          router.push(`/products/${selectedHandle}`)
          setSearchValue("")
          // setTimeout(() => {
          //     setSearchValue("")
          // }, 3000)
        }}
      >
        <IconSearch />
      </div>
    </div>
  )
}

export default SearchBarSm
