"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  side?: "left" | "right" | "top" | "bottom"
}

const Sheet: React.FC<SheetProps> = ({ children, isOpen, onClose, side = "right" }) => {
  const [isMounted, setIsMounted] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen, onClose])

  const sheetClasses = cn(
    "fixed z-50 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out",
    {
      "inset-y-0 right-0 w-full max-w-sm": side === "right",
      "inset-y-0 left-0 w-full max-w-sm": side === "left",
      "inset-x-0 top-0 h-full max-h-screen": side === "top",
      "inset-x-0 bottom-0 h-full max-h-screen": side === "bottom",
    },
    isOpen ? "translate-x-0" : side === "right" ? "translate-x-full" : "translate-x-[-100%]",
  )

  const content = (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/80 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />
      <div ref={sheetRef} className={sheetClasses}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </>
  )

  if (!isMounted) {
    return null
  }

  return createPortal(content, document.body)
}

export { Sheet }

