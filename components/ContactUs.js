import React from 'react';

const infoData = {
    address: {
        title: 'Primary Location',
        lines: ['Greater Melbourne Area', 'Victoria'],
    },
    socials: [
        {/*
            href: '#',
            label: 'Facebook',
            icon: (
                <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 text-white"
                >
                    <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
		c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
		c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
		l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z">

                    </path>

                </svg>
            ),
        */},
        {
            href: 'https://www.instagram.com/timelesstilerestoration?igsh=cWJmOTBzcXNxM3dr',
            label: 'Instagram',
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff" />
                    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff" />
                </svg>
            ),
        },
        {/*
            href: '#',
            label: 'TikTok',
            icon: (
                <svg
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                </svg>
            ),
        */},
    ],
};

export default function ContactUs() {
    const { address, contact, socials } = infoData;

    return (
        <section className="py-20 bg-secondary" id="contact-us">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="max-w-2xl mx-auto mb-12 lg:mb-20 text-center">
                    <h2 className="font-heading mb-6 text-4xl md:text-5xl tracking-tight text-primary">Ready to revetilise your tiles?</h2>
                    <p className="mb-5 font-bold"></p>
                </div>

                {/* Content Sections */}
                <div className="flex flex-wrap -mx-4">
                    {/* Socials */}
                    <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
                        <div className="py-12 h-full border text-center rounded-xl bg-primary text-secondary">
                            <h3 className="mb-7 text-2xl font-semibold font-heading">Socials</h3>
                            <div className="flex flex-wrap items-end justify-center">
                                {socials.map(({ href, icon, label }, idx) => (
                                    <a
                                        key={idx}
                                        href={href}
                                        className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contacts  */}
                    <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
                        <div className="py-12 h-full border text-center rounded-xl bg-primary text-secondary">
                            <h3 className="mb-6 text-2xl font-semibold font-heading">Contacts</h3>
                            <a className="btn btn-primary items-center space-x-2 flex" href="tel:0411669974">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <span>0411 669 974</span>
                            </a>

                            <a className="btn btn-primary items-center space-x-2 flex" href="mailto:max@timelesstilerestoration.com.au">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span>max@timelesstilerestoration.com.au</span>
                            </a>
                        </div>

                    </div>

                    {/*  Address */}
                    <div className="w-full lg:w-1/3 px-4">
                        <div className="py-12 h-full border text-center rounded-xl bg-primary text-secondary">
                            <h3 className="mb-6 text-2xl font-semibold font-heading">{address.title}</h3>
                            {address.lines.map((line, idx) => (
                                <p key={idx} className="text-white">{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
