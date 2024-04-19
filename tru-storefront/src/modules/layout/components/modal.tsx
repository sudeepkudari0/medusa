import { clx } from "@medusajs/ui"
import React, { useState } from "react"

const Modal = ({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 h-screen transform duration-300 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 -translate-x-full"
      }`} >
      <div
        className={clx(
          "fixed inset-0 bg-black w-full duration-0",
          isOpen ? "opacity-50" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div className="absolute left-0 mx-auto h-screen bg-white shadow-md w-[300px]">
        {children}
      </div>
    </div>
  )
}

export default Modal
