'use client'

import { useState, useEffect } from 'react'

export default function Gallery({ images }) {
  // determine imagesPerPage based on window width
  const getImagesPerPage = () =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 9

  const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // update imagesPerPage on resize
  useEffect(() => {
    const onResize = () => {
      setImagesPerPage(getImagesPerPage())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // recalc total pages whenever images or imagesPerPage change
  const totalPages = Math.ceil(images.length / imagesPerPage)

  // if currentPage now out of range, clamp
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1)
    }
  }, [totalPages, currentPage])

  const startIdx = (currentPage - 1) * imagesPerPage
  const visibleImages = images.slice(startIdx, startIdx + imagesPerPage)
  const placeholdersCount = imagesPerPage - visibleImages.length

  const openModal = (src) => {
    setSelectedImage(src)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setSelectedImage(null)
    setIsModalOpen(false)
  }
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const getCaption = (src) => {
    const filename = src.split('/').pop() || ''
    return filename.replace(/\.[^/.]+$/, '')
  }

  return (
    <>
      <section className="py-16 overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading mb-6 text-4xl md:text-5xl tracking-tight text-primary">
            Our Past Work
          </h2>
          <p className="mb-5 font-bold">
            Yearly access to all products with ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleImages.map((src, idx) => {
              const caption = getCaption(src)
              return (
                <div key={idx} className="cursor-pointer">
                  <div
                    className="rounded-lg overflow-hidden border-2 border-black"
                    onClick={() => openModal(src)}
                  >
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
              <div key={`ph-${i}`} className="cursor-pointer">
                <div className="rounded-lg overflow-hidden border-2 border-black invisible h-56" />
                <div className="mt-2 text-center text-base font-medium invisible">
                  placeholder
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && selectedImage && (
            <div
              className="fixed inset-0 bg-[rgba(253,242,233,0.82)] flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div
                className="relative bg-secondary rounded-lg p-4 max-w-3xl max-h-full overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute top-2 right-4 text-white hover:text-white-400 text-4xl leading-none"
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
        </div>
      </section>

      {totalPages > 1 && (
        <section className="pb-9 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="py-6 px-5 rounded-lg">
              <nav aria-label="pagination">
                <ul className="pagination text-md flex w-full justify-center mb-0">
                  {/* Previous */}
                  <li className="page-item mr-auto">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="btn btn-secondary page-link flex h-full items-center border-secondary text-secondary-content bg-transparent rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3329 7.33338H6.27294L8.47294 5.14004C8.59847 5.01451 8.669 4.84424 8.669 4.66671C8.669 4.48917 8.59847 4.31891 8.47294 4.19338C8.3474 4.06784 8.17714 3.99731 7.99961 3.99731C7.82207 3.99731 7.65181 4.06784 7.52627 4.19338L4.19294 7.52671C4.13224 7.59011 4.08467 7.66487 4.05294 7.74671C3.98626 7.90902 3.98626 8.09107 4.05294 8.25338C4.08467 8.33521 4.13224 8.40997 4.19294 8.47338L7.52627 11.8067C7.58825 11.8692 7.66198 11.9188 7.74322 11.9526C7.82446 11.9865 7.9116 12.0039 7.99961 12.0039C8.08761 12.0039 8.17475 11.9865 8.25599 11.9526C8.33723 11.9188 8.41096 11.8692 8.47294 11.8067C8.53542 11.7447 8.58502 11.671 8.61887 11.5898C8.65271 11.5085 8.67014 11.4214 8.67014 11.3334C8.67014 11.2454 8.65271 11.1582 8.61887 11.077C8.58502 10.9958 8.53542 10.922 8.47294 10.86L6.27294 8.66671H11.3329C11.5097 8.66671 11.6793 8.59647 11.8043 8.47145C11.9294 8.34642 11.9996 8.17685 11.9996 8.00004C11.9996 7.82323 11.9294 7.65366 11.8043 7.52864C11.6793 7.40361 11.5097 7.33338 11.3329 7.33338Z"
                          fill="#3D485B"
                        />
                      </svg>
                      <span className="ml-1 font-semibold text-base-content">
                        Previous
                      </span>
                    </button>
                  </li>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className="page-item mx-1">
                      <button
                        onClick={() => goToPage(i + 1)}
                        className={`btn btn-secondary page-link border-secondary flex h-full items-center bg-transparent px-2 ${
                          currentPage === i + 1
                            ? 'text-secondary-content font-bold'
                            : 'text-base-content'
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}

                  {/* Next */}
                  <li className="page-item ml-auto">
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="btn btn-secondary page-link flex h-full items-center border-secondary text-secondary-content bg-transparent rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="mr-1 font-semibold text-base-content">
                        Next
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66706 8.66663L9.72706 8.66662L7.52706 10.86C7.40152 10.9855 7.331 11.1558 7.331 11.3333C7.331 11.5108 7.40152 11.6811 7.52706 11.8066C7.6526 11.9322 7.82286 12.0027 8.00039 12.0027C8.17793 12.0027 8.34819 11.9322 8.47373 11.8066L11.8071 8.47329C11.8678 8.40989 11.9153 8.33513 11.9471 8.25329C12.0137 8.09098 12.0137 7.90893 11.9471 7.74662C11.9153 7.66479 11.8678 7.59003 11.8071 7.52662L8.47373 4.19329C8.41175 4.13081 8.33802 4.08121 8.25678 4.04736C8.17554 4.01352 8.0884 3.99609 8.00039 3.99609C7.91239 3.99609 7.82525 4.01352 7.74401 4.04736C7.66277 4.08121 7.58904 4.13081 7.52706 4.19329C7.46457 4.25527 7.41498 4.329 7.38113 4.41024C7.34729 4.49148 7.32986 4.57862 7.32986 4.66663C7.32986 4.75463 7.34729 4.84177 7.38113 4.92301C7.41498 5.00425 7.46457 5.07798 7.52706 5.13996L9.72706 7.33329L4.66706 7.33329C4.49025 7.33329 4.32068 7.40353 4.19566 7.52855C4.07063 7.65358 4.00039 7.82315 4.00039 7.99996C4.00039 8.17677 4.07063 8.34634 4.19566 8.47136C4.32068 8.59639 4.49025 8.66663 4.66706 8.66663Z"
                          fill="#3D485B"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
