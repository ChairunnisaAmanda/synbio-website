import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

// Sample testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "The mentoring program gave me valuable insights into academic career paths in synthetic biology. My mentor's guidance helped me navigate graduate school applications with confidence.",
    name: "Siti Rahayu",
    role: "Master's Student, Bandung Institute of Technology",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "As someone interested in biotech entrepreneurship, connecting with a mentor who had founded their own startup was invaluable. They helped me refine my business idea and connect with potential investors.",
    name: "Reza Pratama",
    role: "Undergraduate Student, Gadjah Mada University",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "My mentor provided practical advice on transitioning from academia to industry. Their insights into the biotech job market in Indonesia helped me land my dream position.",
    name: "Budi Santoso",
    role: "PhD Student, University of Indonesia",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Mentor categories
const mentorCategories = [
  {
    id: 1,
    title: "Academia",
    description:
      "Connect with professors, researchers, and academic professionals who can guide you through research, publications, and academic career paths.",
    image: "/placeholder.svg?height=192&width=384",
  },
  {
    id: 2,
    title: "Company",
    description:
      "Learn from professionals working in established biotech and pharmaceutical companies about industry trends, career opportunities, and skill development.",
    image: "/placeholder.svg?height=192&width=384",
  },
  {
    id: 3,
    title: "Start-up",
    description:
      "Get insights from biotech entrepreneurs who have founded or work in startups, learning about innovation, business development, and fundraising.",
    image: "/placeholder.svg?height=192&width=384",
  },
  {
    id: 4,
    title: "Indonesian Student Abroad",
    description:
      "Connect with Indonesian students studying synthetic biology and bioinformatics abroad for guidance on international education and research opportunities.",
    image: "/placeholder.svg?height=192&width=384",
  },
  {
    id: 5,
    title: "Government",
    description:
      "Gain perspective from professionals working in government agencies related to biotechnology, research funding, and policy development.",
    image: "/placeholder.svg?height=192&width=384",
  },
]

// Timeline steps
const timelineSteps = [
  {
    id: 1,
    title: "Application",
    description:
      "Submit your application through our online form, detailing your background, interests, and what you hope to gain from the mentoring program.",
  },
  {
    id: 2,
    title: "Matching",
    description:
      "Our team carefully matches mentees with mentors based on shared interests, career goals, and expertise areas.",
  },
  {
    id: 3,
    title: "Orientation",
    description:
      "Attend an orientation session to learn about the program structure, expectations, and best practices for a successful mentoring relationship.",
  },
  {
    id: 4,
    title: "Mentoring Sessions",
    description:
      "Engage in regular one-on-one sessions with your mentor over a 3-6 month period, discussing your goals, challenges, and progress.",
  },
  {
    id: 5,
    title: "Program Completion",
    description: "Complete the program with a final session to reflect on your growth, achievements, and future plans.",
  },
]

export default function MentoringPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#F0F9FF] to-gray-50 md:py-24">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#20544B] md:text-5xl">Mentoring Programs</h1>
              <p className="mb-8 text-xl font-medium leading-relaxed text-gray-700">
                Connect with experts in synthetic biology and bioinformatics for guidance, support, and professional
                development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://forms.google.com/mentor-application"
                  className="inline-flex items-center px-6 py-3 font-medium text-[#20544B] transition-colors rounded-md bg-[#F2D668] hover:bg-opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Mentor
                </Link>
                <Link
                  href="https://forms.google.com/mentee-application"
                  className="inline-flex items-center px-6 py-3 font-medium text-[#20544B] transition-colors rounded-md border-2 border-[#F2D668] bg-transparent hover:bg-[#F2D668] hover:bg-opacity-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply as Mentee
                </Link>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image src="/placeholder.svg?height=384&width=640" alt="Mentoring" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What is 1-on-1 Mentoring Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#20544B]">What is 1-on-1 Mentoring?</h2>
            <p className="text-xl text-gray-700">
              Synbio.ID's Mentoring Program connects mentors from various life science sectors with 1–3 mentees to share
              knowledge, insights, and career guidance tailored to their journey.
            </p>

            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 font-medium text-[#20544B] transition-colors rounded-md border-2 border-[#F2D668] hover:bg-[#F2D668] hover:bg-opacity-10"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Mentoring Guidebook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Mentor Categories</h2>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 lg:grid-cols-5">
            {mentorCategories.map((category) => (
              <div
                key={category.id}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#F2D668]"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#20544B]">{category.title}</h3>
                  <p className="text-sm text-gray-700">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center">Mentoring Process</h2>
          <div className="max-w-3xl mx-auto mt-12">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="ml-6">
                  <h3 className="mb-2 text-xl font-bold text-[#20544B]">{step.title}</h3>
                  <p className="mb-8 text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#F2D668]">
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
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 text-white bg-[#1E4E45]">
        {" "}
        {/* Changed color to avoid clashing with footer */}
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Become a Mentor */}
            <div id="become-mentor" className="p-8 rounded-lg bg-white bg-opacity-10">
              <h2 className="mb-4 text-2xl font-bold">Become a Mentor</h2>
              <p className="mb-6 text-gray-100">
                Share your knowledge and experience with the next generation of synthetic biology and bioinformatics
                enthusiasts. As a mentor, you'll have the opportunity to guide and inspire young talents in the field.
              </p>
              <Link
                href="https://forms.google.com/mentor-application"
                className="inline-flex items-center px-6 py-3 font-medium transition-colors rounded-md bg-[#F2D668] text-[#20544B] hover:bg-opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Apply as Mentee */}
            <div id="apply-mentee" className="p-8 rounded-lg bg-white bg-opacity-10">
              <h2 className="mb-4 text-2xl font-bold">Apply as Mentee</h2>
              <p className="mb-6 text-gray-100">
                Get guidance and support from experienced professionals in synthetic biology and bioinformatics. As a
                mentee, you'll have access to valuable insights, feedback, and networking opportunities.
              </p>
              <Link
                href="https://forms.google.com/mentee-application"
                className="inline-flex items-center px-6 py-3 font-medium transition-colors rounded-md bg-[#F2D668] text-[#20544B] hover:bg-opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
