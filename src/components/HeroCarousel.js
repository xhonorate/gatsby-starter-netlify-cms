import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import FullWidthImage from './FullWidthImage';


const HeroCarousel = ({ showControls, showIndicators, slides }) => (
  <div>
  <MDBCarousel showIndicators={showIndicators} showControls={showControls} fade>
    <MDBCarouselInner>
    {slides.map((slide, index) => (
      <MDBCarouselItem key={`slide-${index}`} className={index == 0 ? 'active' : ''}>
        <FullWidthImage 
          img={slide.image}
          title={slide.heading}
          subheading={slide.subheading}
          align={slide.align}
        />
      </MDBCarouselItem>
    ))}
    
    </MDBCarouselInner>
  </MDBCarousel>

  </div>
);

HeroCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      subheading: PropTypes.string,
      align: PropTypes.string,
    }))
};

export default HeroCarousel;