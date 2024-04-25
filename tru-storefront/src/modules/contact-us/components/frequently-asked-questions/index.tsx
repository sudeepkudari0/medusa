"use client"

import { ProgressAccordion, Text } from "@medusajs/ui"
import * as React from "react"
import { Accordion } from "react-accordion-ts"
import "react-accordion-ts/src/panel.css"

const content =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur adipisicing elit.."

const news = [
  {
    title: "Will i receive the same product that i see in the picture?",
    content: ["Not yet added"],
  },
  {
    title: "Where can i view my sales?",
    content: ["Not yet Added"],
  },
  {
    title: "How can i return an item?",
    content: ["Not yet added"],
    open: false,
  },
  {
    title: "Will you restock items indicated as out of stock ?",
    content: ["Not yet added"],
    open: false,
  },
  {
    title: "Where can i ship my order??",
    content: ["Not yet added"],
    open: false,
  },
]

const items = news.map(({ open, title, content }) => ({
  open,
  title: (
    <h2 className="p-1 bg-white border-t-2 border-gray-300 min-w-full">
      {title}
    </h2>
  ),
  content: (
    <>
      {content.map((item: string, index: number) => (
        <p key={index} className="p-3">
          {item}
        </p>
      ))}
    </>
  ),
}))

export const FAQ = () => {
  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold pb-4">FREQUENTLY ASKED QUETIONS</h1>
      <Accordion items={items} duration={300} multiple={true} />
    </div>
  )
}
