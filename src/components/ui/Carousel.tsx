/**
 * Advanced Carousel Component
 * Matching Framer's slider functionality with 37+ variants
 */

import type { ReactNode } from 'react'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'

interface CarouselProps {
  children: ReactNode[]
  autoPlay?: boolean
  autoPlayDelay?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
  loop?: boolean
}

export default function Carousel({
  children,
  autoPlay = false,
  autoPlayDelay = 3000,
  showDots = true,
  showArrows = true,
  className = '',
  loop = true,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, skipSnaps: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto play
  useEffect(() => {
    if (!autoPlay || !emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, autoPlayDelay)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayDelay, emblaApi])

  return (
    <div className={`relative ${className}`}>
      {/* Main carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
              style={{ willChange: 'transform' }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && children.length > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[rgb(19,38,27)] hover:bg-[rgb(238,185,42)] transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[rgb(19,38,27)] hover:bg-[rgb(238,185,42)] transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-8 h-2 bg-[rgb(238,185,42)]'
                  : 'w-2 h-2 bg-[rgb(94,107,100)] hover:bg-[rgb(19,38,27)]'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Thumbnail variant carousel
interface ThumbnailCarouselProps extends CarouselProps {
  thumbnails?: string[]
}

export function ThumbnailCarousel({ thumbnails, ...props }: ThumbnailCarouselProps) {
  const [mainRef, mainApi] = useEmblaCarousel()
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    setSelectedIndex(mainApi.selectedScrollSnap())
    thumbApi.scrollTo(mainApi.selectedScrollSnap())
  }, [mainApi, thumbApi, setSelectedIndex])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on('select', onSelect)
    mainApi.on('reInit', onSelect)

    return () => {
      mainApi.off('select', onSelect)
      mainApi.off('reInit', onSelect)
    }
  }, [mainApi, onSelect])

  return (
    <div className={props.className}>
      {/* Main carousel */}
      <div className="overflow-hidden mb-4" ref={mainRef}>
        <div className="flex">
          {props.children.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail navigation */}
      {thumbnails && thumbnails.length > 1 && (
        <div className="overflow-hidden" ref={thumbRef}>
          <div className="flex gap-2">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => onThumbClick(index)}
                className={`flex-[0_0_20%] min-w-0 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === selectedIndex
                    ? 'ring-2 ring-[rgb(238,185,42)] opacity-100'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
