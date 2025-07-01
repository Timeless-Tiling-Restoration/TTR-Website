"use client"

import { useState, useRef } from 'react'
import Link from 'next/link'

const faqs = [
    {
        question: 'What is Solstice? What is it for?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt est. Duis odio eros, mattis id elit vitae, molestie tempus massa. Vestibulum varius risus quis erat egestas, et tincidunt metus vestibulum.',
    },
    {
        question: 'What steps do I need to take to join?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt est. Duis odio eros, mattis id elit vitae, molestie tempus massa. Vestibulum varius risus quis erat egestas, et tincidunt metus vestibulum.',
    },
    {
        question: 'Do you facilitate any regular events or offer rooms for group discussions?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt est. Duis odio eros, mattis id elit vitae, molestie tempus massa. Vestibulum varius risus quis erat egestas, et tincidunt metus vestibulum.',
    },
    {
        question: 'Is there a particular subject I should focus on learning?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt est. Duis odio eros, mattis id elit vitae, molestie tempus massa. Vestibulum varius risus quis erat egestas, et tincidunt metus vestibulum.',
    },
    {
        question: 'Can I make it a fun group study session by inviting my buddies?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt est. Duis odio eros, mattis id elit vitae, molestie tempus massa. Vestibulum varius risus quis erat egestas, et tincidunt metus vestibulum.',
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
                        <p className="mb-5 font-bold">Yearly access to all products with ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 py-3 px-5 h-12 rounded-full bg-purple-900 border border-purple-700 hover:bg-purple-800 focus:ring focus:ring-purple-800 transition duration-200 text-white font-semibold text-sm"
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
