import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section with background image and centered text */}
      <section className="relative py-32 md:py-48">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="Synbio Indonesia Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Synbio Indonesia</h1>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Empowering and connecting life-scientists & biotechnologists in Indonesia
            </h2>
            <p className="mb-8 text-lg font-medium leading-relaxed">
              A non-profit organization dedicated to advancing synthetic biology and bioinformatics in Indonesia.
            </p>
            <Link
              href="https://chat.whatsapp.com/example"
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

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-center text-[#20544B] sm:text-4xl">Our Programs</h2>
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* BIOS */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]">
              <div className="relative h-48">
                <Image src="/images/bios.jpg" alt="BIOS" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">BIOS</h3>
                <p className="mb-4 text-gray-700">
                  Bioinformatics and Synthetic Biology Competition for students and professionals.
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
                <Image src="/images/synbiotechfest.jpg" alt="SynbioTechFest" fill className="object-cover" />
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
                <Image src="/images/mentoring.jpg" alt="Mentoring" fill className="object-cover" />
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
                <Image src="/images/synbio-cafe.jpg" alt="Synbio Cafe" fill className="object-cover" />
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
                <Image src="/images/mooc.jpg" alt="MOOC" fill className="object-cover" />
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
                <Image src="/images/local-chapter.jpg" alt="Local Chapter" fill className="object-cover" />
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

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="mb-0 text-3xl font-bold text-[#20544B] sm:text-4xl">Follow Us on Instagram</h2>
            <Link
              href="https://www.instagram.com/synbio.id/"
              className="inline-flex items-center text-[#20544B] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @synbio.id
              <Instagram className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Instagram Embed - Using iframe for native embed */}
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/synbio.id/embed"
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="mb-0 text-3xl font-bold text-[#20544B] sm:text-4xl">Latest News</h2>
            <Link href="/news" className="inline-flex items-center text-[#20544B] hover:underline">
              View all news
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* News Item 1 */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-48">
                <Image src="/images/news1.jpg" alt="News 1" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">April 15, 2025</p>
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">SynbioTechFest 2025 Successfully Concluded</h3>
                <p className="mb-4 text-gray-700">
                  The annual SynbioTechFest brought together experts and enthusiasts from around the world...
                </p>
                <Link
                  href="/news/synbiotechfest-2025"
                  className="inline-flex items-center text-[#20544B] hover:underline"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-48">
                <Image src="/images/news2.jpg" alt="News 2" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">March 28, 2025</p>
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Registration for BIOS 2025 Now Open</h3>
                <p className="mb-4 text-gray-700">
                  We are excited to announce that registration for BIOS 2025 is now open. Join us for an immersive
                  experience...
                </p>
                <Link
                  href="/news/bios-2025-registration"
                  className="inline-flex items-center text-[#20544B] hover:underline"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-48">
                <Image src="/images/news3.jpg" alt="News 3" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">February 10, 2025</p>
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">New Mentoring Program Launched</h3>
                <p className="mb-4 text-gray-700">
                  Synbio Indonesia is proud to announce the launch of our new mentoring program designed to connect
                  students...
                </p>
                <Link
                  href="/news/new-mentoring-program"
                  className="inline-flex items-center text-[#20544B] hover:underline"
                >
                  Read more
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
    </div>
  )
}
