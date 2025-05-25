import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#20544B] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Synbio Indonesia</h2>
            <p className="text-sm text-gray-300">
              A non-profit organization that focuses on enhancing synthetic biology and bioinformatics enthusiasts in
              Indonesia.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#F2D668]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bios" className="hover:text-[#F2D668]">
                  BIOS
                </Link>
              </li>
              <li>
                <Link href="/synbiotechfest" className="hover:text-[#F2D668]">
                  SynbioTechFest
                </Link>
              </li>
              <li>
                <Link href="/mentoring" className="hover:text-[#F2D668]">
                  Mentoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">More</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/news" className="hover:text-[#F2D668]">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F2D668]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-[#F2D668]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Connect With Us</h2>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/synbio.id/" className="text-gray-300 hover:text-[#F2D668]">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/synbio-indonesia/posts/?feedView=all" className="text-gray-300 hover:text-[#F2D668]">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:info.synbio@gmail.com" className="text-gray-300 hover:text-[#F2D668]">
                <span className="sr-only">Email</span>
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-sm text-center text-gray-300">
            &copy; {new Date().getFullYear()} Synbio Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
