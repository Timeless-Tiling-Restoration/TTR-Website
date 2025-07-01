import React from 'react';
import fs from 'fs';

import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import FAQ from '../components/Faq';
import Testimonial from '../components/Testimonial';

export default function HomePage() {
  const imagesDir = `${process.cwd()}/public/images/photos`;
  let images = [];

  try {
    images = fs
      .readdirSync(imagesDir)
      .filter((file) => /\.(jpe?g|png|gif)$/i.test(file))
      .map((name) => `/images/photos/${name}`);
  } catch (error) {
    console.error('Error reading images directory:', error);
  }

  return (
    <main>
      <Header />
      <Timeline />
      <Gallery images={images} />
      <FAQ />
      <Testimonial />
    </main>
  );
}
