import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "../styles/gallery.css";

// Utils
import { ImageOrientation } from "../utils/image-orientation";

// Components

const GalleryContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  max-height: 100%;

  transition: 500ms opacity ease;
  opacity: ${(props) => props.opacity};

  & .carousel.carousel-slider,
  & .slider-wrapper,
  & .image-gallery,
  & .slider,
  & .slide,
  & video,
  & img {
    height: 100%;
  }

  & img.landscape {
    padding: 120px;

    @media (max-width: 600px) {
      padding: 40px;
    }
  }

  & img.portrait {
    padding: 80px;

    @media (max-width: 600px) {
      padding: 40px;
    }
  }

  & .carousel.carousel-slider .control-arrow {
    padding: 0;
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  & a {
    display: block;

    width: 100%;
    height: 100%;

    position: relative;
  }

  & img {
    max-width: 100%;

    object-fit: contain;
  }
`;

export const Gallery = ({ images, opacity, autoplay }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [allGalleryContent, setAllGalleryContent] = useState([]);
  const [totalSlides, setTotalSlides] = useState(null);

  useEffect(() => {
    setTotalSlides(images.length);
    setAllGalleryContent(images);
  }, []);

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  const galleryContent = images.map((content, index) => {
    return (
      <ImageContainer key={`homepage_images_${index}`}>
        <img
          className={ImageOrientation(content.image)}
          srcSet={content.image.fluid.srcSetWebp}
          src={content.image.fluid.srcWebp}
          alt={content.image.alt}
          loading={index <= 2 || index === images.length - 1 ? `eager` : `lazy`}
        />
      </ImageContainer>
    );
  });

  return (
    <GalleryContainer opacity={opacity}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        className="image-gallery"
        selectedItem={currentSlide}
        onChange={(index) => updateCurrentSlide(index)}
        stopOnHover={false}
        interval={7000}
        transitionTime={750}
        axis="vertical"
      >
        {galleryContent}
      </Carousel>
    </GalleryContainer>
  );
};
