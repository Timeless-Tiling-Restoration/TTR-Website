"use client"

import { useState, useRef } from 'react'
import Link from 'next/link'

const faqs = [
    {
        question: 'My verandah has a lot of chipped and broken tiles, can it still be restored?',
        answer:
            'We have a large inventory of spare original tiles to replace the damaged ones. Some tiles are rarer than others, and anything we don\'t have in stock we will do our best to replicate or find something similar to use instead.  ',
    },
    {
        question: 'How long does the restoration process take? ',
        answer:
            'The timeline for restoration varies depending on the number of tiles and the extent of damage. Generally, it can take anywhere from a few days to several weeks. We\'ll provide a clear timeline during our initial assessment.',
    },
        {
        question: 'How do I care for my restored tiles?',
        answer:
            'After restoration, we recommend specific cleaning and maintenance practices to ensure the longevity of your tiles. Our team will provide guidelines tailored to your tiles\' materials. ',
    },
        {
        question: 'How can I get in touch with you? ',
        answer:
            'You can contact us through our website, by phone, or via email. We\'re here to answer any questions and assist you with your tile restoration needs!',
    },

]

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    return (
        <div
            className="mb-3 p-6 border rounded-lg cursor-pointer"
            onClick={() => setOpen((o) => !o)}
        >
            <div className="flex items-center justify-between gap-6">
                <h3 className="text-lg font-semibold">{question}</h3>
                <svg
                    className={`transform transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'
                        } w-6 h-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        d="M19.5 8.25L12 15.75L4.5 8.25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div
                ref={contentRef}
                style={{
                    maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px',
                }}
                className="overflow-hidden transition-all duration-500"
            >
                <p className="mt-2">{answer}</p>
            </div>
        </div>
    )
}

export default function FAQ() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Left column */}
                    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                        <h2 className="font-heading mb-6 text-4xl md:text-5xl tracking-tight text-primary">Frequently Asked Questions</h2>
                        <p className="mb-5 font-bold">We understand you may have questions about the restoration process, and we're here to help. Whether it's replacing chipped tiles, understanding the timeline, caring for your restored surfaces, or simply getting in touch, we aim to make everything clear and accessible. Our team offers expert guidance, personalised care advice, and open communication every step of the way.</p>
                        <Link
                            href="#contact-us"
                            className="inline-flex items-center justify-center gap-2 py-3 px-5 h-12 rounded-full bg-primary hover:bg-primary-800 focus:ring focus:ring-primary-800 transition duration-200 text-white font-semibold text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M13.3333 1.66669H6.66666C3.33332 1.66669 1.66666 3.33335 1.66666 6.66669V17.5C1.66666 17.9584 2.04166 18.3334 2.49999 18.3334H13.3333C16.6667 18.3334 18.3333 16.6667 18.3333 13.3334V6.66669C18.3333 3.33335 16.6667 1.66669 13.3333 1.66669ZM11.6667 12.7084H5.83332C5.49166 12.7084 5.20832 12.425 5.20832 12.0834C5.20832 11.7417 5.49166 11.4584 5.83332 11.4584H11.6667C12.0083 11.4584 12.2917 11.7417 12.2917 12.0834C12.2917 12.425 12.0083 12.7084 11.6667 12.7084ZM14.1667 8.54169H5.83332C5.49166 8.54169 5.20832 8.25835 5.20832 7.91669C5.20832 7.57502 5.49166 7.29169 5.83332 7.29169H14.1667C14.5083 7.29169 14.7917 7.57502 14.7917 7.91669C14.7917 8.25835 14.5083 8.54169 14.1667 8.54169Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Talk to us
                        </Link>
                    </div>

                    {/* Right column (FAQ items) */}
                    <div className="w-full lg:w-2/3 px-4">
                        {faqs.map((item, idx) => (
                            <FAQItem
                                key={idx}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
