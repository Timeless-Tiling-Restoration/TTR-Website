export default function Header() {
  return (
    <section
      className="relative w-full h-96 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('images/banners/B_GeometricTile_Background.png')" }}
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-[rgba(253,242,233,0.82)]"></div>

      {/* Content on top */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent">
          Timeless Tile Renovation
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Specialising in restoring and revitalising vintage tiles,
          breathing new life into historic surfaces while preserving their unique charm.
        </p>
        <a href="#get-started" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
}
