'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageLightbox } from '@/components/image-lightbox'
import { cn } from '@/lib/utils'

export function ImageGrid({
  images,
  columns = 2,
}: {
  images: string[]
  columns?: 2 | 3
}) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <div
        className={cn(
          'grid gap-4',
          columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {images.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % columns) * 0.08 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border transition-all hover:border-netflix-red hover:[box-shadow:0_0_0_1px_#E50914]"
            aria-label={`Open image ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src || '/placeholder.svg'}
              alt={`Project visual ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <ImageLightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  )
}
