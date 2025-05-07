import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, Star } from "lucide-react"

// Sample testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "SynbioTechFest 2024 was an incredible experience. The speakers were world-class and the networking opportunities were invaluable.",
    name: "Dr. Maya Putri",
    role: "Researcher, University of Indonesia",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "As a student, attending STF 2024 opened my eyes to the possibilities in synthetic biology. I'm inspired to pursue research in this field.",
    name: "Budi Santoso",
    role: "Biotechnology Student, ITB",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "The workshops at STF 2024 provided practical skills that I can immediately apply in my work. Highly recommended!",
    name: "Rina Wijaya",
    role: "Lab Technician, BioTech Indonesia",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function SynbioTechFestPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#F0F9FF] to-gray-50 md:py-24">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#20544B] md:text-5xl">SynbioTechFest</h1>
              <p className="mb-8 text-xl font-medium leading-relaxed text-gray-700">
                A festival where biotech & synbio enthusiasts in Indonesia meet and connect.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image src="/placeholder.svg?height=384&width=640" alt="SynbioTechFest" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section for STF 2025 */}
      <section className="py-16 bg-[#F2D668] bg-opacity-20">
        <div className="container text-center">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-[#F2D668] text-[#20544B]">
            Coming Soon
          </div>
          <h2 className="mb-6 text-3xl font-bold text-[#20544B] sm:text-4xl">SynbioTechFest 2025</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
            We're already planning for next year's event. Stay tuned for announcements about dates, venue, and how you
            can participate in Indonesia's premier synthetic biology and biotechnology festival.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 font-medium text-[#20544B] transition-colors rounded-md bg-[#F2D668] hover:bg-opacity-90"
          >
            Get Notified
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* STF 2024 Review Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#20544B]">STF 2024 Review</h2>

          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 mr-3 text-[#F2D668]" />
                <div>
                  <h3 className="font-semibold text-gray-900">Date</h3>
                  <p className="text-gray-700">June 15-17, 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-[#F2D668]" />
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-700">Jakarta Convention Center</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 mr-3 text-[#F2D668]" />
                <div>
                  <h3 className="font-semibold text-gray-900">Participants</h3>
                  <p className="text-gray-700">500+ Attendees</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image src="/placeholder.svg?height=400&width=600" alt="STF 2024 Event" fill className="object-cover" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-[#20544B]">A Celebration of Innovation</h3>
              <p className="mb-4 text-lg text-gray-700">
                SynbioTechFest 2024 brought together experts, researchers, students, and industry professionals for
                three days of inspiring talks, workshops, and networking events. The festival featured keynote speeches
                from leading figures in synthetic biology and biotechnology.
              </p>
              <p className="text-lg text-gray-700">
                Attendees had the opportunity to participate in hands-on workshops, explore the exhibition area
                showcasing cutting-edge research and products, and connect with like-minded individuals passionate about
                advancing synthetic biology in Indonesia.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <h3 className="mt-16 mb-8 text-2xl font-bold text-center text-[#20544B]">What Attendees Said</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#F2D668]">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F2D668]" fill="#F2D668" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 italic text-gray-700">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <h3 className="mt-16 mb-8 text-2xl font-bold text-center text-[#20544B]">Event Highlights</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=STF+2024+${index + 1}`}
                  alt={`STF 2024 Highlight ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-[#20544B]">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Stay Updated on STF 2025</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join our mailing list to receive updates about SynbioTechFest 2025, including speaker announcements,
            registration details, and early bird discounts.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2D668] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 font-medium transition-colors rounded-md bg-[#F2D668] text-[#20544B] hover:bg-opacity-90 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
