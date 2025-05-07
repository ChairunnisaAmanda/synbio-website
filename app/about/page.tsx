import Image from "next/image"
import Link from "next/link"
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Sample team data with placeholder names
const founders = [
  {
    id: 1,
    name: "John Doe",
    role: "Co-Founder & President",
    image: "/placeholder.svg?height=200&width=200",
    bio: "PhD in Synthetic Biology from University A. Passionate about advancing synthetic biology in Indonesia.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Co-Founder & Scientific Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Researcher in bioinformatics with expertise in genomic data analysis and computational biology.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Co-Founder & Education Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Educator with a passion for making synthetic biology accessible to students across Indonesia.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Co-Founder & Community Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Biotechnology expert focused on building and nurturing the synthetic biology community in Indonesia.",
  },
]

const advisors = [
  {
    id: 1,
    name: "Prof. John Smith",
    role: "Scientific Advisor",
    institution: "University X",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Dr. Emily Brown",
    role: "Industry Advisor",
    institution: "BioTech Company",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Prof. Michael Johnson",
    role: "Education Advisor",
    institution: "Institute Y",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const committee = [
  {
    id: 1,
    name: "Robert Davis",
    role: "Program Manager",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Lisa Wilson",
    role: "Communications Director",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Jennifer Taylor",
    role: "Technology Officer",
    image: "/placeholder.svg?height=200&width=200",
  },
]

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
            A non-profit organization that focuses on enhancing synthetic biology and bioinformatics enthusiasts in
            Indonesia.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Synbio Indonesia Team"
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
                <div className="p-4 mt-6 rounded-lg bg-[#F2D668] bg-opacity-20">
                  <h3 className="mb-2 text-xl font-bold text-[#20544B]">Fun Fact</h3>
                  <p className="text-gray-700">Founders never meet in full team yet! :D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Founders */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#20544B]">Our Founders</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]"
              >
                <div className="relative h-64">
                  <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-[#20544B]">{founder.name}</h3>
                  <p className="mb-3 text-sm text-gray-500">{founder.role}</p>
                  <p className="text-gray-700">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Advisory */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#20544B]">Advisory Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]"
              >
                <div className="relative h-64">
                  <Image src={advisor.image || "/placeholder.svg"} alt={advisor.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-[#20544B]">{advisor.name}</h3>
                  <p className="mb-1 text-sm text-gray-700">{advisor.role}</p>
                  <p className="text-sm text-gray-500">{advisor.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Executive Committee */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#20544B]">Executive Committee</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {committee.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-[#20544B]">{member.name}</h3>
                  <p className="text-sm text-gray-700">{member.role}</p>
                </div>
              </div>
            ))}
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
                        <a href="mailto:info@synbio.id" className="text-gray-700 hover:text-[#20544B]">
                          info@synbio.id
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900">Social Media</h4>
                      <div className="flex space-x-4">
                        <Link href="https://facebook.com" className="text-gray-700 hover:text-[#F2D668]">
                          <span className="sr-only">Facebook</span>
                          <Facebook className="w-5 h-5" />
                        </Link>
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
