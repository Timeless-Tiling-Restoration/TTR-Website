import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
      <aside>
        <Image
          src="/images/logo-nobg.png"
          width={50}
          height={50}
          alt="Banner of Timeless Tile Restoration"
        ></Image>
        <p className="font-bold">
          Timeless Tile Restoration
          <br />
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
      </nav>
    </footer>
  );
}
