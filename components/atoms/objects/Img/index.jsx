import React from 'react';
import PropTypes from 'prop-types';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

try {
  require('lazysizes'); // eslint-disable-line global-require
} catch (x) {
  // lazysizes = null;
}

const Img = (props) => {
  const {
    image,
    sizes,
    lazyload,
    className,
  } = props;
  let { smallImage } = props;

  if (!smallImage) {
    smallImage = image;
  }

  if (!image) {
    return null;
  }


  return (
    <picture>
      <source
        data-srcset={
          sizes.map(size => (
            `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${image.name} ${size}w`
          ))
        }
        srcSet={!lazyload ? (
          sizes.map(size => (
            `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${image.name} ${size}w`
          ))
        ) : 'nll'}
        media="(min-width: 60em)"
      />
      <source
        // data-srcset={
        //   smallImage.srcSet.map(item => (
        //     `${item.src} ${item.width}w`
        //   ))
        // }
        // srcSet={!lazyload ? (
        //   smallImage.srcSet.map(item => (
        //     `${item.src} ${item.width}w`
        //   ))
        // ) : null}
      />
      <img
        data-sizes="auto"
        className={`lazyload  c-img  ${className}`}
        data-src={lazyload ? image.src : null}
        // src={lazyload ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' : smallImage.srcSet[0].src}
        alt={image.alt}
      />
      <noscript>
        <img
          className={`c-img  ${className}`}
          src={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${sizes[0]}/${image.name}`}
          // src={image.srcSet[0].src}
          alt={image.alt}
        />
      </noscript>
    </picture>
  );
};

Img.propTypes = {
  image: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
  lazyload: PropTypes.bool,
  className: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.number),
};
Img.defaultProps = {
  image: null,
  smallImage: null,
  lazyload: true,
  className: null,
  sizes: [],
};

export default Img;
