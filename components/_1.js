export default function _1() {
    return (
        <div div className="flex w-full flex-col" >
            <div className="card bg-base-300 rounded-box grid place-items-center" id="our-work">
                <div className="hero bg-secondary min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="pl-1">
                            <h1 className="text-4xl font-bold pt-4 pb-2">Check Out Our Latest Work!</h1>
                            <p className="text-3xl pl-2 py-6">
                                F.A.Q
                            </p>

                            {/*F.A.Q Accordion*/}
                            <div className='pb-5'>
                                {/* 
                      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title font-semibold">What types of tiles do you restore?</div>
                        <div className="collapse-content text-sm">We specialise in a wide variety of tiles, including ceramic, porcelain, terracotta, and encaustic tiles. Whether they're vintage or antique, we have the expertise to restore them to their original beauty.</div>
                      </div>
                      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold">How do you determine if a verandah can be restored?</div>
                        <div className="collapse-content text-sm">Our team conducts a thorough assessment of each tile's condition. Factors like material, age, and extent of damage are considered. We'll provide a detailed evaluation and let you know what's possible.</div>
                      </div>
                      */}
                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">My verandah has a lot of chipped and broken tiles, can it still be restored?</div>
                                    <div className="collapse-content text-sm">We have a large inventory of spare original tiles to replace the damaged ones. Some tiles are rarer than others, and anything we don't have in stock we will do our best to replicate or find something similar to use instead.  </div>
                                </div>
                                {/*
                      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold"> What is the restoration process like?</div>
                        <div className="collapse-content text-sm">The restoration process typically includes cleaning, repairing cracks and chips, color matching, and sealing. Each tile is treated with care to maintain its integrity and character throughout the process.</div>
                      </div>
                       */}

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">How long does the restoration process take? </div>
                                    <div className="collapse-content text-sm">The timeline for restoration varies depending on the number of tiles and the extent of damage. Generally, it can take anywhere from a few days to several weeks. We'll provide a clear timeline during our initial assessment. </div>
                                </div>

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold"> Can you restore tiles that are not installed? </div>
                                    <div className="collapse-content text-sm">Yes! We can restore both installed and loose tiles. If you have tiles that need restoration before installation, we can help prepare them for a beautiful finish. </div>
                                </div>

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">Do you offer services for commercial projects? </div>
                                    <div className="collapse-content text-sm">Absolutely! We work on both residential and commercial projects, including historic buildings, restaurants, and retail spaces. Our team is equipped to handle projects of any scale. </div>
                                </div>

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">How do I care for my restored tiles? </div>
                                    <div className="collapse-content text-sm">After restoration, we recommend specific cleaning and maintenance practices to ensure the longevity of your tiles. Our team will provide guidelines tailored to your tiles' materials. </div>
                                </div>

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">What is the cost of tile restoration? </div>
                                    <div className="collapse-content text-sm">Costs vary based on the type of tile, extent of damage, and the number of tiles being restored. We provide detailed quotes after our initial assessment to ensure transparency and clarity.
                                    </div>
                                </div>

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">Do you offer consultations? </div>
                                    <div className="collapse-content text-sm">Yes, we offer consultations to discuss your project, assess the condition of your tiles, and provide recommendations. Feel free to reach out to schedule a consultation. </div>
                                </div>

                                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title font-semibold">How can I get in touch with you? </div>
                                    <div className="collapse-content text-sm">You can contact us through our website, by phone, or via email. We're here to answer any questions and assist you with your tile restoration needs!</div>
                                </div>

                            </div>

                            {/* The button to open modal */}
                            <label htmlFor="contact-us_modal" className="btn btn-primary">Interested? Contact Stef Today!</label>
                            {/*Modal itself */}
                            <input type="checkbox" id="contact-us_modal" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box content-center">

                                    <a className="btn btn-primary  items-center space-x-2 flex" href="tel:0411669974">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                        <span>Call Stef on:  0411 669 974</span>
                                    </a>

                                    <div className="divider divider-vertical">OR</div>

                                    <a className="btn btn-secondary items-center space-x-2 flex" href="mailto:stefcraven1999@gmail.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>

                                        <span>Email Stef at: stefcraven1999@gmail.com</span>
                                    </a>

                                </div>
                                <label className="modal-backdrop" htmlFor="contact-us_modal">Close</label>
                            </div>

                        </div>

                        <div className="carousel carousel-center bg-neutral rounded-box max-w-2xl space-x-4 p-4">
                            <div className="carousel-item">
                                <img
                                    src="images/photos/20210204_135028.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20210204_135035.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241028_134540.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241028_134542.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241028_134559.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241028_134604.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241113_123339.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241113_124308.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20241113_123339.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20250602_093215.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="images/photos/20250602_093223.jpg"
                                    width={590}
                                    className="rounded-box" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
