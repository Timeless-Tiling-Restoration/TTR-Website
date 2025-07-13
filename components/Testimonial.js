'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    imageSrc: '/images/photos/20241113_123339.jpg',
    imageAlt: 'Customer testimonial image',
    quote: `“Ex labore incididunt magna et. Velit velit nostrud duis occaecat magna laboris. Non exercitation consequat labore et ex tempor amet ea voluptate veniam. Esse est sunt quis ipsum non exercitation.”`,
    author: 'Cameron Price',
    role: 'Art Director, Company',
  },
  {
    id: 2,
    imageSrc: '/images/photos/20241028_134540.jpg',
    imageAlt: 'Customer testimonial image',
    quote: `“Since I started using @Basko, our result has skyrocketed! The user interface is so intuitive and easy to navigate, and the features are exactly what I need.”`,
    author: 'Cameron Price',
    role: 'Art Director, Company',
  },
]

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [mounted, setMounted] = useState(false)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // trigger “enter” animation when animKey changes
  useEffect(() => {
    setMounted(true)
  }, [animKey])

  // utility to animate out, then switch index & bump animKey
  const changeReview = (newIndex) => {
    setMounted(false)
    setTimeout(() => {
      setIndex(newIndex)
      setAnimKey((k) => k + 1)
    }, 300)
  }

  const prev = () =>
    changeReview((index - 1 + reviews.length) % reviews.length)
  const next = () => changeReview((index + 1) % reviews.length)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    const dx = touchEndX.current - touchStartX.current
    if (dx > 50) prev()
    else if (dx < -50) next()
  }

  const review = reviews[index]

  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed pt-9"
      style={{
        backgroundImage:
          "url('images/banners/B_GeometricTile_Background.png')",
      }}
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-[rgba(253,242,233,0.82)]"></div>

      <div className="container mx-auto px-4 text-center relative">
        <h2 className="font-heading mb-6 text-4xl md:text-5xl tracking-tight text-primary">
          What Our Customer Had to Say...
        </h2>
        <p className="mb-5 font-bold">
          Excepteur enim eiusmod id ex minim proident magna culpa ipsum.
        </p>

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute top-1/2 left-3 md:left-4 z-10 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute top-1/2 right-3 md:right-4 z-10 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Animated review container */}
        <div
          key={animKey}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex flex-wrap lg:items-center -m-4 mx-auto max-w-4xl transform transition-all duration-300 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Image Column */}
          <div
            className="w-full md:w-1/2 p-8 transform transition-all duration-300 ease-out"
            style={{ transitionDelay: mounted ? '0ms' : '0ms' }}
          >
            <div className="relative max-w-max mx-auto">
              <Image
                src={review.imageSrc}
                alt={review.imageAlt}
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Text Column */}
          <div
            className="w-full md:w-1/2 p-8 text-primary transform transition-all duration-300 ease-out"
            style={{ transitionDelay: mounted ? '100ms' : '0ms' }}
          >
            {/* Quote icon */}
            <svg
              className="mb-8"
              width="41"
              height="31"
              viewBox="0 0 41 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* …path omitted for brevity… */}
            </svg>

            {/* Quote text */}
            <p
              className="mb-8 text-3xl font-semibold"
              style={{ letterSpacing: '-0.5px' }}
            >
              {review.quote}
            </p>

            {/* Author / Role */}
            <p className="font-semibold tracking-tight text-primary">
              {review.author}
            </p>
            <p className="text-sm tracking-tight text-primary">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
