import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = "", childImageSharp, image, options } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={alt}
        {...options}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        alt={alt}
        {...options}
      />
    );
    // for SVGs, etc.
  } else if (!!image.publicURL) {
    const imgOptions = {...options};
    delete imgOptions['objectFit'];
    return <img src={image.publicURL} alt={alt} {...imgOptions}/>;
  } else if (image) {
    // for Netlify CMS
    return <img src={image} alt={alt} style={{maxWidth: "100%", height: 'max-content', margin: 'auto'}} {...options}/>;
  } else {
    return null
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    options: PropTypes.object
  }).isRequired,
};

export default PreviewCompatibleImage;
