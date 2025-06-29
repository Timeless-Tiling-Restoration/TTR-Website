'use client';
import React from 'react';
import Image from 'next/image';

export default function Gallery({ images }) {
  const imageList = images || [];
  if (imageList.length === 0) {
    return <p className="text-center py-6">No images available.</p>;
  }

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-4">
        {imageList.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-64 h-40 relative">
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}