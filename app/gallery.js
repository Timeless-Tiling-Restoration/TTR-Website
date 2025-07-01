import fs from 'fs'
import path from 'path'
import ClientCarousel from './ClientCarousel'

export default function GalleryPage() {
  const dir = path.join(process.cwd(), 'public/images/photos')
  const files = fs.readdirSync(dir)
    .filter(f => /\.(jpe?g|png|svg|webp)$/i.test(f))
    .sort()                  // optional: keep a consistent order
  const images = files.map(f => `/images/photos/${f}`)

  return <ClientCarousel images={images}/>
}
