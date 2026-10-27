import React from 'react'

export default function LandscapeImage({ name, alt, wide = false, priority = false, position = '50% 50%', className = '', sizes = '(max-width: 760px) calc(100vw - 40px), (max-width: 1000px) 55vw, 620px' }) {
  const width = wide ? 1672 : 1536
  return (
    <div className={`landscape-image ${className}`} style={{ '--image-position': position }}>
      <img
        src={`/images/${name}.webp`}
        srcSet={`/images/${name}-640.webp 640w, /images/${name}-1024.webp 1024w, /images/${name}.webp ${width}w`}
        sizes={sizes}
        width={width}
        height={wide ? 941 : 1024}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  )
}
