'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-secondary/20">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500"
          priority
          sizes="(min-width: 1024px) 896px, 100vw"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={showPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-primary/60 backdrop-blur-sm transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-primary/60 backdrop-blur-sm transition-colors hover:text-primary"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 w-2 rounded-full bg-background/80 backdrop-blur-sm transition-colors',
                  currentIndex === index ? 'bg-primary' : 'hover:bg-primary/60'
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
} 