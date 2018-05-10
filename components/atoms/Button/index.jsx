import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './Button.scss';

const Button = ({
  tag,
  type,
  onClick,
  href,
  target,
  title,
  disabled,
  tabIndex,
  hideLabel,
  modifier,
  reversed,
  text,
  icon,
  isActive,
}) => {
  // Only render the icon when there is actually a icon needed
  let iconTemplate = null;
  if (icon) {
    iconTemplate = (
      <span className="c-button__wrap-icon">
        <Icon icon={icon} modifier="c-icon--inherit" />
      </span>
    );
  }

  // Hide the label visually when hideLabel is true
  const labelClass = (hideLabel) ? 'u-visually-hidden' : '';

  let rel = null;
  if (target === '_blank') {
    rel = 'noopener noreferrer';
  }

  return (
    React.createElement(
      tag,
      {
        className: classNames('c-button', {
          'c-button--hide-label': hideLabel,
          'c-button--reversed': reversed,
          'c-button--transparant': modifier === 'transparant',
          'c-button--has-icon': iconTemplate,
          'is-active': isActive,
        }),
        type,
        onClick,
        href: tag === 'a' ? href : null,
        target,
        rel,
        title,
        disabled,
        tabIndex,
      },
      <span className="c-button__inner">
        <span className={`c-button__label ${labelClass}`} dangerouslySetInnerHTML={{ __html: text }} />
        {iconTemplate}
      </span>,
    )
  );
};

Button.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.string,
  hideLabel: PropTypes.bool,
  reversed: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.string,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  tag: 'a',
  modifier: '',
  hideLabel: false,
  reversed: false,
  type: null,
  onClick: null,
  target: null,
  title: null,
  disabled: false,
  text: 'Button label',
  href: '#',
  icon: '',
  tabIndex: null,
  isActive: false,
};

export default Button;
