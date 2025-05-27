"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

// Mock Instagram posts data (in a real app, this would come from an API)
const mockInstagramPosts = [
  {
    id: "post1",
    imageUrl: "/instagram-post-1.jpg",
    caption: "Join us for our upcoming Synthetic Biology workshop! #SynbioIndonesia #Biotech",
    likes: 45,
    date: "2 days ago",
  },
  {
    id: "post2",
    imageUrl: "/instagram-post-2.jpg",
    caption: "Highlights from our recent BIOS competition. Congratulations to all participants! #BIOS2023",
    likes: 72,
    date: "1 week ago",
  },
  {
    id: "post3",
    imageUrl: "/instagram-post-3.jpg",
    caption: "Our team at the International Synthetic Biology Conference #SynBio2023 #GlobalCollaboration",
    likes: 63,
    date: "2 weeks ago",
  },
  {
    id: "post4",
    imageUrl: "/instagram-post-4.jpg",
    caption: "Synbio Cafe meetup discussing the latest advancements in genetic engineering #SynbioCafe",
    likes: 38,
    date: "3 weeks ago",
  },
]

export default function InstagramFeed() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Instagram className="w-6 h-6 text-[#20544B]" />
          <span className="font-medium">@synbio.id</span>
        </div>
        <Link
          href="https://www.instagram.com/synbio.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#20544B] hover:underline"
        >
          View Profile
        </Link>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square bg-gray-200 animate-pulse rounded-md"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {mockInstagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://www.instagram.com/synbio.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transition-opacity duration-300">
                  <p className="text-sm line-clamp-3">{post.caption}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <Link
          href="https://www.instagram.com/synbio.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors rounded-md bg-[#20544B] hover:bg-opacity-90"
        >
          Follow Us on Instagram
          <Instagram className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
