'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { ActionButton } from '@/components/action-button'

const inputClass =
  'w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-near-white placeholder:text-muted-text focus:border-netflix-red focus:outline-none focus:ring-1 focus:ring-netflix-red'

const labelClass =
  'font-mono text-xs uppercase tracking-wider text-muted-text'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-4 rounded-lg border border-netflix-red bg-surface p-8"
        >
          <CheckCircle2 size={32} className="text-netflix-red" aria-hidden />
          <h3 className="font-heading text-xl font-bold text-near-white">
            Message sent!
          </h3>
          <p className="text-muted-text">
            Thanks for reaching out — I&apos;ll get back to you soon.
          </p>
          <ActionButton
            variant="outlined"
            onClick={() => setSent(false)}
            className="mt-2"
          >
            Send another
          </ActionButton>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className={labelClass}>
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Project inquiry"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project..."
              className={`${inputClass} resize-none`}
            />
          </div>
          <ActionButton type="submit" variant="filled" className="w-full">
            Send Message
          </ActionButton>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
