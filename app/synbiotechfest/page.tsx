import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SynbioTechFestPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center text-[#20544B] md:text-5xl">SynbioTechFest</h1>

      <div className="relative w-full max-w-2xl h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-stf-3GnWQLOX14H7omERwJzRREYokcepwD.png"
          alt="SynbioTechFest"
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center max-w-2xl">
        <h2 className="mb-6 text-3xl font-bold text-[#20544B]">Coming Soon</h2>
        <p className="mb-8 text-xl text-gray-600">
          We're preparing for our next SynbioTechFest, where biotech and synbio enthusiasts in Indonesia meet and
          connect. Stay tuned for dates and registration information!
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
