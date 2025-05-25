import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import InstagramFeed from "@/components/instagram-feed"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-hero-dcZzzJPKij3l0jh6cMMpL5aFhLrJ6x.png"
            alt="Synbio Indonesia Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Synbio Indonesia</h1>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Empowering and Connecting Indonesian Life Scientists
            </h2>
            <p className="mb-8 text-lg font-medium leading-relaxed">
              A non-profit organization dedicated to advancing synthetic biology and bioinformatics in Indonesia.
            </p>
            <Link
              href="https://chat.whatsapp.com/ELPH5UPRy6S3R1wuoDRwbB?fbclid=PAZXh0bgNhZW0CMTEAAade-zgMm669aEqlVEPltduAkQQVXQWumw2AKdaNW2e6IByjqeHsGNG6O26UKw_aem_17WybwsfdKY-tifvII2dRQ"
              className="inline-flex items-center px-6 py-3 font-medium text-[#20544B] transition-colors rounded-md bg-[#F2D668] hover:bg-opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-center text-[#20544B] sm:text-4xl">About Synbio Indonesia</h2>
          <p className="max-w-3xl mx-auto text-lg text-center text-gray-700">
            We initiated Synbio.id in 2019 to unite synthetic biology and bioinformatics enthusiasts across Indonesia.
            Our mission is to foster innovation, collaboration, and community in these rapidly evolving fields.
          </p>
        </div>
      </section>

      {/* Synbio ID Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-center text-[#20544B] sm:text-4xl">Our Pillars</h2>
          <div className="flex justify-center">
            <div className="max-w-5xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-pillars-MZxMfCkDIvSJR2U0fMfnfpLC1K8kZo.png"
                alt="Synbio Indonesia Pillars"
                width={1200}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-center text-[#20544B] sm:text-4xl">Our Programs</h2>
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* BIOS */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-bios-7NOzRYzO7NdR7BFVqpZuDnVuM5xDMD.png"
                  alt="BIOS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">BIOS</h3>
                <p className="mb-4 text-gray-700">
                  Bioinformatics and Synthetic Biology Summer Course for students and professionals.
                </p>
                <Link href="/bios" className="inline-flex items-center text-[#20544B] hover:underline">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* SynbioTechFest */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-stf-3GnWQLOX14H7omERwJzRREYokcepwD.png"
                  alt="SynbioTechFest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">SynbioTechFest</h3>
                <p className="mb-4 text-gray-700">
                  A festival where biotech & synbio enthusiasts in Indonesia meet and connect.
                </p>
                <Link href="/synbiotechfest" className="inline-flex items-center text-[#20544B] hover:underline">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Mentoring */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-mentoring-YBwVvD9r7DcAHMFb7vGPgcrd9vMWga.png"
                  alt="Mentoring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Mentoring</h3>
                <p className="mb-4 text-gray-700">
                  Connect with experts in the field for guidance and professional development.
                </p>
                <Link href="/mentoring" className="inline-flex items-center text-[#20544B] hover:underline">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Synbio Cafe */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-cafe-2LPchQtW8BtOq7EBRdWhy5MhmRRw4X.png"
                  alt="Synbio Cafe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Synbio Cafe</h3>
                <p className="mb-4 text-gray-700">
                  Casual meetups and discussions about synthetic biology and bioinformatics.
                </p>
                <Link href="#" className="inline-flex items-center text-[#20544B] hover:underline">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* MOOC */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-mooc-0dA5zNJI6Rl9N3YLHDAqq15UsnjZjM.png"
                  alt="MOOC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">MOOC</h3>
                <p className="mb-4 text-gray-700">
                  Massive Open Online Courses for learning synthetic biology and bioinformatics.
                </p>
                <Link href="#" className="inline-flex items-center text-[#20544B] hover:underline">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Local Chapter */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-local-pyWb5bS1yFcWIfwwiQnvmju0bCN84x.png"
                  alt="Local Chapter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Local Chapter</h3>
                <p className="mb-4 text-gray-700">
                  Regional communities across Indonesia for local collaboration and events.
                </p>
                <Link href="#" className="inline-flex items-center text-[#20544B] hover:underline">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-[#20544B]">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with like-minded individuals passionate about synthetic biology and bioinformatics in Indonesia.
          </p>
          <Link
            href="https://chat.whatsapp.com/example"
            className="inline-flex items-center px-6 py-3 font-medium transition-colors rounded-md bg-[#F2D668] text-[#20544B] hover:bg-opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join WhatsApp Group
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-center text-[#20544B] sm:text-4xl">Latest News</h2>
          <div className="max-w-4xl mx-auto">
            <InstagramFeed />
          </div>
        </div>
      </section>
    </div>
  )
}
