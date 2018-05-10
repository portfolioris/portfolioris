import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '../../atoms/Button';

const getSlug = (url) => {
  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';
};

const PrimaryNav = ({
  items,
  activePageId,
}) => (
  <nav>
    <ul className="o-layout  o-layout--gutter-small  o-layout--inline  u-mb-flatten">
      {items.map(item => (
        <li
          key={item.ID}
          className="o-layout__cell  o-layout__cell--fit"
        >
          <Link
            as={`/${item.object}/${getSlug(item.url)}`}
            href={`/${item.object === 'category' ? 'category' : 'post'}?slug=${getSlug(item.url)}&apiRoute=${item.object}`}
          >
            <Button
              isActive={parseInt(item.object_id, 10) === activePageId}
              modifier="transparant"
              text={item.title}
              href={`/${item.object}/${getSlug(item.url)}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

PrimaryNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  activePageId: PropTypes.number,
};

PrimaryNav.defaultProps = {
  items: [],
  activePageId: null,
};

export default PrimaryNav;
