'use client'

import { useState, useEffect } from 'react'

export default function Gallery({ images }) {
  // 1. Responsive images per page
  const getImagesPerPage = () =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 9

  const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  // 2. Animation state for gallery items
  const [animKey, setAnimKey] = useState(0)
  const [mounted, setMounted] = useState(false)

  // 3. Modal states for slide-in/out
  const [showModal, setShowModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // on mount or page-key change, trigger item entrance
  useEffect(() => {
    setMounted(true)
  }, [animKey])

  // update imagesPerPage on resize
  useEffect(() => {
    const onResize = () => {
      setImagesPerPage(getImagesPerPage())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // recalc pages
  const totalPages = Math.ceil(images.length / imagesPerPage)

  // clamp currentPage if out of range
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1)
    }
  }, [totalPages, currentPage])

  const startIdx = (currentPage - 1) * imagesPerPage
  const visibleImages = images.slice(startIdx, startIdx + imagesPerPage)
  const placeholdersCount = imagesPerPage - visibleImages.length

  // open modal with slide-in
  const openModal = (src) => {
    setSelectedImage(src)
    setShowModal(true)
    // next tick start animation
    setTimeout(() => setAnimateModal(true), 10)
  }
  // close with slide-out then unmount
  const closeModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setShowModal(false)
      setSelectedImage(null)
    }, 300)
  }

  // page change: fade out, then switch page & re-mount
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setMounted(false)
    setTimeout(() => {
      setCurrentPage(page)
      setAnimKey((k) => k + 1)
    }, 300)
  }

  const getCaption = (src) => {
    const filename = src.split('/').pop() || ''
    return filename.replace(/\.[^/.]+$/, '')
  }

  return (
    <>
      <section className="py-16 overflow-hidden bg-secondary" id="past-work">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading mb-6 text-4xl md:text-5xl tracking-tight text-primary">
            Our Past Work
          </h2>
          <p className="mb-5 font-bold">
          </p>

          {/* gallery grid with fade/slide on mount & page change */}
          <div
            key={animKey}
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transform transition-all duration-300 ease-out ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }`}
          >
            {visibleImages.map((src, idx) => {
              const caption = getCaption(src)
              return (
                <div
                  key={idx}
                  className={`cursor-pointer transform transition-all duration-300 ease-out ${
                    mounted
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  onClick={() => openModal(src)}
                >
                  <div className="rounded-lg overflow-hidden border-2 border-black">
                    <img
                      src={src}
                      alt={caption}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center text-base font-medium">
                    {caption}
                  </div>
                </div>
              )
            })}

            {Array.from({ length: placeholdersCount }).map((_, i) => (
              <div key={`ph-${i}`} className="cursor-pointer invisible">
                <div className="rounded-lg overflow-hidden border-2 border-black h-56" />
                <div className="mt-2 text-center text-base font-medium">
                  placeholder
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pagination */}
      {totalPages > 1 && (
        <section className="pb-9 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="py-6 px-5 rounded-lg">
              <nav aria-label="pagination">
                <ul className="flex w-full justify-center mb-0">
                  <li className="mr-auto">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center px-3 py-1 border border-secondary rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                      ‹ Previous
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className="mx-1">
                      <button
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 border border-secondary rounded transition-colors duration-300 ${
                          currentPage === i + 1
                            ? 'bg-secondary text-secondary-content font-bold'
                            : 'bg-transparent'
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}

                  <li className="ml-auto">
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center px-3 py-1 border border-secondary rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                      Next ›
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      )}

      {/* modal wrapper */}
      {showModal && (
        <div
          className="fixed inset-0 bg-[rgba(253,242,233,0.82)] flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-secondary rounded-lg p-4 max-w-3xl max-h-full overflow-auto transform transition-all duration-300 ease-out ${
              animateModal
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-2 right-4 text-4xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt={getCaption(selectedImage)}
              className="w-full h-auto object-contain"
            />
            <div className="mt-4 text-center text-lg font-semibold">
              {getCaption(selectedImage)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
