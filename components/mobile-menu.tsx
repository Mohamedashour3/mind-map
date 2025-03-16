"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AppStoreButton } from "@/components/app-store-button"
import { PlayStoreButton } from "@/components/play-store-button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <>
          {/* Overlay that covers everything */}
          <div
            className="fixed inset-0 z-[9999] bg-white"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "white" }}
          >
            <div className="border-b p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-17_143250-removebg-preview%201-1PnN9EJk5Dqwe16JomiVOijih1cdJq.png"
                  alt="Mind Map Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-primary">Mind Map</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <div className="p-6 flex flex-col gap-8">
              <nav className="flex flex-col gap-6">
                <Link
                  href="/features"
                  className="text-2xl font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/about"
                  className="text-2xl font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Button variant="ghost" size="lg" className="justify-start p-0 h-auto text-2xl font-medium">
                  <Globe className="h-6 w-6 mr-3" />
                  <span>Change Language</span>
                </Button>
              </nav>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-center">
                  <AppStoreButton />
                </div>
                <div className="flex justify-center">
                  <PlayStoreButton />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

