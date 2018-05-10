import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

import Button from 'components/atoms/Button';
import Rte from 'components/atoms/text/Rte';
import BackgroundVisual from 'components/molecules/BackgroundVisual';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Heading from 'components/atoms/text/Heading';

import './MainVisual.scss';

class MainVisual extends Component {
  componentDidMount() {
    //
  }

  render() {
    const {
      heading,
      subheading,
      link,
      linkText,
      image,
      smallImage,
      isLarge,
    } = this.props;

    return (
      <section
        className="c-main-visual"
      >
        <Retain
          size="full"
        >
          <BackgroundVisual
            hasContent
            image={{
              image,
              sizes: [750, 1536, 1920],
            }}
            smallImage={{
              smallImage,
              sizes: [750, 1536],
            }}
          >
            <div
              className={classNames('c-main-visual__content', {
                'c-main-visual__content--large': isLarge,
              })}
            >
              <Layer size="medium">
                <Retain>
                  <div className="u-text-center">
                    <Heading level={1} className="u-macro" text={heading} />
                    <Rte richText={subheading} className="u-epsilon" />
                    {link && linkText ? (
                      <p>
                        <Link
                          as={`/${link.post_type}/${link.post_name}`}
                          href={`/${link.post_type === 'page' ? 'post' : link.post_type}?slug=${link.post_name}&apiRoute=${link.post_type}`}
                        >
                          <Button
                            href={`/${link.post_type}/${link.post_name}`}
                            text={linkText}
                          />
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </Retain>
              </Layer>
            </div>
          </BackgroundVisual>
        </Retain>
      </section>
    );
  }
}

MainVisual.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  isLarge: PropTypes.bool,
  link: PropTypes.objectOf(PropTypes.any),
  linkText: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
};
MainVisual.defaultProps = {
  heading: null,
  subheading: null,
  isLarge: false,
  link: null,
  linkText: null,
  image: null,
  smallImage: null,
};

export default MainVisual;

