import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './Gallery.css';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
const Gallery = ({ images }) => {
  // const images = [9, 8, 7, 6, 5].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`
  // }));
  // console.log(images);
  const [myImages, setMyImages] = useState(images);
  useEffect(() => {
    setMyImages(images.map((image) => {
      return {
        src: image.url,
      }
    }))
  }, [images])
  return (
    <Carousel
      images={myImages}
      className="gallery"
      style={{ height: 400, width: `100%` }}
      canAutoPlay={true}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      leftIcon={<i className="fas fa-chevron-left gallery-arrows"></i>}
      rightIcon={<i className="fas fa-chevron-right gallery-arrows"></i>}
      minIcon={<div className="ver-mas">Volver</div>}
      maxIcon={<div className="ver-mas">Ver más</div>}
    // shouldSwipeOnMouse={true}
    />

  );
};

export default Gallery;