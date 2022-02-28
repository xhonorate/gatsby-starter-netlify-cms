import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDBContainer } from 'mdb-react-ui-kit';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import MDRenderer from './MDRenderer';

export default function FullWidthImage(props) {
  const {
    height = 420,
    img,
    title,
    subheading,
    align = "center",
    imgPosition = "center",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          minHeight: height,
        }}
      >       
        <PreviewCompatibleImage
          imageInfo={{
            image: img,
            alt: "hero-image",
            options: {
              style: {
                gridArea: "1/1",
                width: "100%",
                height: "100%"
              },
              objectFit: "cover",
              objectPosition: imgPosition,
              layout: "fullWidth",
              // You can optionally force an aspect ratio for the generated image
              //aspectratio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              formats: ["auto", "webp", "avif"],     
            }     
          }}   
        />

        {(title || subheading) && (
          <MDBContainer
            className="px-5 py-4 py-md-0"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: align,
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && <MDRenderer className="full-width-image-title">{title}</MDRenderer>}
            {title && <MDRenderer className="lead full-width-image-subheading">{subheading}</MDRenderer>}
          </MDBContainer>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
