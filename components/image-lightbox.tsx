'use client'

import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function ImageLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: string[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const open = index !== null

  const prev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + images.length) % images.length)
  }, [index, images.length, onNavigate])

  const next = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % images.length)
  }, [index, images.length, onNavigate])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, prev, next])

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/95 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md border border-border text-near-white transition-colors hover:border-netflix-red hover:text-netflix-red"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-md border border-border text-near-white transition-colors hover:border-netflix-red hover:text-netflix-red"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <motion.img
            key={index}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={images[index] || '/placeholder.svg'}
            alt={`Preview ${index + 1} of ${images.length}`}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 bottom-4 z-10 flex h-11 w-11 items-center justify-center rounded-md border border-border text-near-white transition-colors hover:border-netflix-red hover:text-netflix-red sm:bottom-auto"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-text">
            {index + 1} / {images.length}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
