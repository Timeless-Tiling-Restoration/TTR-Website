import Image from 'next/image'
export default function Header() {
  return (
    <header>
      {/* BANNER HERO */}
      <div className="flex w-full flex-col">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(/images/background.webp)",
          }}
        >
          <div className="hero-overlay backdrop-blur-lg"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-5xl font-bold">Timeless Tile Restoration</h1>
              <p className="mb-5">
                At TTimeless Tile Restoration, we specialise in restoring and revitalising vintage tiles,
                breathing new life into historic surfaces while preserving their unique charm.

                Our passionate artisans blend traditional craftsmanship with modern technology
                to ensure each tile honours its rich history and meets today's standards.
                Whether renovating a home, restoring a heritage building, or enhancing a commercial space,
                we're your trusted partner for enduring, stunning tile restoration.
              </p>
              <div className="pt-3">
                <a className="btn btn-primary btn-md" href="#our-work">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

                  <span>
                    Check Out Our Work!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
