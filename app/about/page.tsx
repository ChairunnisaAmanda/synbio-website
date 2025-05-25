import Image from "next/image"
import Link from "next/link"
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#F0F9FF] to-gray-50 md:py-24">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-center text-[#20544B] md:text-5xl">
            About Synbio Indonesia
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl font-medium leading-relaxed text-center text-gray-700">
            Synthetic Biology Community of Indonesia // Komunitas Biologi Sintetik Indonesia
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-head-O2ldPqLffKEyBhk523srGYueDv2NyE.png"
                alt="Synbio Indonesia Activities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#20544B]">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We initiated Synbio.id in late 2019 to enhance synthetic biology and bioinformatics enthusiasts in
                  Indonesia. Our goal is to build a community that fosters innovation and collaboration in these
                  exciting fields.
                </p>
                <p>
                  Since our founding, we have organized numerous events, workshops, and programs to promote synthetic
                  biology and bioinformatics education and research in Indonesia. We believe that these fields have
                  enormous potential to address some of the most pressing challenges facing our country and the world.
                </p>
                <p>
                  Our community has grown to include students, researchers, professionals, and enthusiasts from across
                  Indonesia, all united by a passion for synthetic biology and bioinformatics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-[#f5f9f8]">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-center text-[#20544B]">Our Founders</h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="relative h-96">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-founders-PtKpdcjw4Lr63FoDHnwwLIy45Ffnxy.png"
                  alt="Synbio Indonesia Founders"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <p className="mb-4 text-lg text-gray-700">
                  Meet the visionaries who established Synbio Indonesia in 2019, bringing together their passion and
                  expertise to create a community for synthetic biology and bioinformatics enthusiasts across Indonesia.
                </p>
                <div className="grid grid-cols-5 gap-4 mt-6">
                  <div className="text-center">
                    <h3 className="font-bold text-[#20544B]">Immanuel Sanka, Ph. D</h3>
                    <p className="text-sm text-gray-600">ESR in Microfluidics & Bioinformatics, Tallinn University of Technology </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[#20544B]">Nurul Izzati</h3>
                    <p className="text-sm text-gray-600">Vice Rector for Collaboration and Development of Sumbawa University of Technology</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[#20544B]">Muhammad Farhan Maulana</h3>
                    <p className="text-sm text-gray-600">Manager of BizOps at #1 SEA Edtech, Fellow of Global Bio Summit of MIT</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[#20544B]">Aulia Reski Widyaningrum</h3>
                    <p className="text-sm text-gray-600">Lab Analyst at RSUI, Government-Alumni Network for Universitas Indonesia</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[#20544B]">Alfiatun Hasanah</h3>
                    <p className="text-sm text-gray-600">Graphic Designer at Biotech-based Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Position-image layout */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#20544B]">Our Team</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Directors */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-directors-RBXoC35TjHif6yTbdkfZGc6o6R9OBq.png"
                  alt="Directors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Directors</h3>
                <p className="text-gray-700">Core leadership team steering vision, strategy, and growth across Synbio ID initiatives.</p>
              </div>
            </div>

            {/* Managers */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-managers-i93hEdju7zvwGjlbhClVcHc43g1vkM.png"
                  alt="Managers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Managers</h3>
                <p className="text-gray-700">Overseeing day-to-day operations and program implementation.</p>
              </div>
            </div>

            {/* SynbioTechFest */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-stf-6R559FvUXypsOp5Stl211MBHLpDTeA.png"
                  alt="SynbioTechFest Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">SynbioTechFest Team</h3>
                <p className="text-gray-700">Organizing our annual festival for biotech and synbio enthusiasts.</p>
              </div>
            </div>

            {/* Mentoring */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-mentoring-KrtZIls5EObDXXLcBJKTUXJDwyziCs.png"
                  alt="Mentoring Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Mentoring Team</h3>
                <p className="text-gray-700">Connecting experts with aspiring scientists and researchers.</p>
              </div>
            </div>

            {/* BIOS */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-bios-7vA5At9Ttoq8YK2vMBVwk1mpGSqY8N.png"
                  alt="BIOS Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">BIOS Team</h3>
                <p className="text-gray-700">Running our annual Bioinformatics and Synthetic Biology competition.</p>
              </div>
            </div>

            {/* MOOC */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-mooc-AGPHYjHempad3BZjRxry1uYB2BukrY.png"
                  alt="MOOC Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">MOOC Team</h3>
                <p className="text-gray-700">Developing online courses for accessible learning in synthetic biology and bioinformatics.</p>
              </div>
            </div>

            {/* Finance */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-finance-Cm9qrxhJifqm2unYb9Dc2dUtCn4FZO.png"
                  alt="Finance Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Finance Team</h3>
                <p className="text-gray-700">Enabling organizational's growth through efficient systems, financial strategy, and scalable operations.</p>
              </div>
            </div>

            {/* Local Chapter */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-local-AZwNMHrahJiRovAcL6kM2rPc5tprJe.png"
                  alt="Local Chapter Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Local Chapter Team</h3>
                <p className="text-gray-700">Coordinating regional communities across Indonesia for collaboration and events.</p>
              </div>
            </div>

            {/* Science Communication */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-scicomm-t55bKWBGaZIdd2chdqXoMBucTrskqp.png"
                  alt="Science Communication Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Science Communication Team</h3>
                <p className="text-gray-700">Empowering communities through engaging stories in biotech, synbio, and bioinformatics.</p>
              </div>
            </div>

            {/* Synbio Cafe */}
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-cafe-N9njhuwLT7SFlRwg7jglV39TxLJpYH.png"
                  alt="Synbio Cafe Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#20544B]">Synbio Cafe Team</h3>
                <p className="text-gray-700">Organizing casual meetups and discussions for our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#20544B]">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-[#20544B]">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 text-[#F2D668]" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <a href="mailto:info.synbio@gmail.com" className="text-gray-700 hover:text-[#20544B]">
                          info.synbio@gmail.com
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900">Social Media</h4>
                      <div className="flex space-x-4">
                        <Link href="https://twitter.com" className="text-gray-700 hover:text-[#F2D668]">
                          <span className="sr-only">Twitter</span>
                          <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="https://instagram.com" className="text-gray-700 hover:text-[#F2D668]">
                          <span className="sr-only">Instagram</span>
                          <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com" className="text-gray-700 hover:text-[#F2D668]">
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-[#20544B]">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20544B] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20544B] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20544B] focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 font-medium text-white transition-colors rounded-md bg-[#20544B] hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
