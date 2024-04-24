"use client"

import React, { useState } from "react";

interface ImageZoomProps {
  src: string;
  alt: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="block w-full" />

      {isZoomed && (
        <div
          className="absolute top-0 left-full w-full h-full bg-no-repeat bg-cover border border-gray-300 z-10"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `-${mousePosition.x}px -${mousePosition.y}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageZoom;
