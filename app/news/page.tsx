import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#20544B] md:text-5xl">Coming Soon</h1>
        <p className="max-w-md mx-auto mb-8 text-xl text-gray-600">
          We're working on bringing you the latest news and updates from Synbio Indonesia.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 font-medium text-[#20544B] transition-colors rounded-md bg-[#F2D668] hover:bg-opacity-90"
        >
          Back to Home
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
