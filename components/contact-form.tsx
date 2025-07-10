"use client"

import { useActionState } from "react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20544B] focus:border-transparent transition-colors"
          required
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20544B] focus:border-transparent transition-colors"
          required
          disabled={isPending}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20544B] focus:border-transparent transition-colors resize-vertical"
          required
          disabled={isPending}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full px-6 py-3 font-medium text-white transition-colors rounded-md bg-[#20544B] hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state && (
        <div
          className={`mt-4 p-4 rounded-md ${
            state.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}
    </form>
  )
}
