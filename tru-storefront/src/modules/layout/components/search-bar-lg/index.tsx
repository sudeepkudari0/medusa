"use client"

import { String } from "cypress/types/lodash"
import { useAdminProducts, useProducts } from "medusa-react"
import { useEffect, useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"
import Select from "react-select"
import AsyncSelect from "react-select/async"
import IconSearch from "./search-svg"
import { useRouter } from "next/navigation"

const categories = [
  {
    label: "Aroma Candles",
    value: "aroma-candles",
  },
  {
    label: "Essential Oils",
    value: "essential-oils",
  },
]

const SearchBarLg = () => {
  const [searchValue, setSearchValue] = useState<string>()
  const [selectedCategory, setSelectedCategory] = useState<String>()
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

  const handleChange = (option: any) => {
    setSelectedCategory(option.value)
  }

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
    <div className="relative w-full flex items-center justify-center">
      <div className="flex flex-row shadow-sm">
      <AsyncSelect
        loadOptions={loadOptions}
        placeholder="Search Products"
        value={
          searchValue
            ? { label: searchValue, value: searchValue, handle: selectedHandle }
            : null
        }
        onChange={(e: any) => {
          setSelectedHandle(e.handle)
          setSearchValue(e.label)
          router.push(`/products/${selectedHandle}`)
        }}
        className="w-[23vw] border-2 h-[35px] border-r-0 rounded-l border-gray-300 !outline-none"
        styles={{
          indicatorSeparator: () => ({ display: "none" }),
          control: () => ({
            outline: "none",
            ":hover": { borderColor: "#aaa" },
          }),
        }}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
      {/* <Select
        className="w-[180px] border text-sm h-[35px] rounded-none border-gray-400"
        classNamePrefix="bg-transparent"
        placeholder="Categories"
        onChange={handleChange}
        name="categories"
        options={categories}
        styles={{
          control: (provided) => ({
            ...provided,
            outline: "none",
            paddingBottom: "3px",
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
            ":hover": { borderColor: "#aaa" },
          }),
        }}
      /> */}
      <div
        className="cursor-pointer h-[35px] border-2 border-l-0 rounded-r w-[40px] border-gray-300"
        onClick={() => {
          router.push(`/products/${selectedHandle}`)
        }}
      >
        <IconSearch />
      </div>
      </div>
    </div>
  )
}

export default SearchBarLg
