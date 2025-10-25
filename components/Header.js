export default function Header() {
  return (
    <section
      className="relative w-full h-96 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('images/banners/B_GeometricTile_Background.png')" }}
      id="AboutUs"
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-[rgba(253,242,233,0.82)]"></div>

      {/* Content on top */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent">
          Breathe new life into your tiles.
        </h2>
        <p className="text-lg md:text-xl mb-6">
          At Timeless Tile Restoration, we restore and revitalise historic tiles with expert craftsmanship and modern techniques, preserving their unique charm and delivering lasting, high-quality results for any space.
        </p>
        <a href="#quotes" className="btn btn-primary">
          Get a free phone consult
        </a>
      </div>
    </section>
  );
}
