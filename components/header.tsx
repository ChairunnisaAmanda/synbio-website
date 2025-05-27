"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "BIOS", href: "/bios" },
  { name: "STF", href: "/synbiotechfest" },
  { name: "Mentoring", href: "/mentoring" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#20544B] shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Synbio Indonesia</span>
            <div className="relative w-40 h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20putih%20bold-21yc8NTpUJjF9tzxEls7g0wQCYMXv5.png"
                alt="Synbio Indonesia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => {
            // Check if this is the active page
            const isActive = typeof window !== "undefined" && window.location.pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  isActive ? "text-[#F2D668] border-b-2 border-[#F2D668]" : "text-white hover:text-[#F2D668]"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-[#1a4840]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#20544B] border-t border-[#1a4840]">
            {navigation.map((item) => {
              // Check if this is the active page
              const isActive = typeof window !== "undefined" && window.location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md hover:bg-[#1a4840] ${
                    isActive ? "text-[#F2D668] bg-[#1a4840]" : "text-white hover:text-[#F2D668]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
