import React from 'react'
import CircularGallery from './CircularGallery'
import { Container } from '../layout/Container'

const Gallery = () => {
  return (
    <section className="w-full py-16 bg-white">
      <Container>
        {/* Heading and Description */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#49051E] mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of visuals that capture creativity, color, and emotion in every frame.
          </p>
        </div>

        {/* Circular Gallery Section */}
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            bend={3}
            textColor="#49051E"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </Container>
    </section>
  )
}

export default Gallery
