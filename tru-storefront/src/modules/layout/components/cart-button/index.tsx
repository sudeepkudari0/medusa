"use client"

import { Cart, LineItem } from "@medusajs/medusa"

import { enrichLineItems, retrieveCart } from "@modules/cart/actions"

import CartDropdown from "../cart-dropdown"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

const fetchCart = async () => {
  const cart = await retrieveCart()

  if (cart?.items.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
    cart.items = enrichedItems as LineItem[]
  }
  return cart
}

export default function CartButton() {

  // const [cart, setCart] = useState<Omit<Cart, "beforeInsert" | "afterLoad"> | null>(null)

  const { data: cart } = useQuery(["customCart"], async () => await fetchCart())
  
  return <CartDropdown cart={cart} />
}
