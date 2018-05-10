import Button from 'components/atoms/Button';
import Retain from 'components/atoms/objects/Retain';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

import Header from 'components/organisms/Header';

import './Navigation.scss';

const getSlug = (url) => {
  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };

    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ isLoaded: true });
    });
  }

  handleToggleMenu(e) {
    e.preventDefault();
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  }

  closeMenu() {
    this.setState({
      menuIsOpen: false,
    });
  }

  render() {
    const {
      items,
      activePageId,
      children,
    } = this.props;

    return (
      <div className="c-body-wrap">
        <div className="c-body-wrap__header">
          <Header
            items={items}
            activePageId={activePageId}
            handleToggleMenu={this.handleToggleMenu}
            menuIsOpen={this.state.menuIsOpen}
          />
        </div>
        <div
          className={classNames('c-body-wrap__main', {
            'is-open': this.state.menuIsOpen,
          })}
        >
          <main>
            {children}
          </main>
        </div>
        <div
          className={classNames('c-body-wrap__navigation', {
            'is-loaded': this.state.isLoaded,
            'is-open': this.state.menuIsOpen,
          })}
          id="navigation"
        >
          <Retain>
            <ul className="o-list-clean">
              {items.map(item => (
                <li
                  key={item.ID}
                  className="u-mb--tiny"
                >
                  <Link
                    as={`/${item.object}/${getSlug(item.url)}`}
                    href={`/${item.object === 'category' ? 'category' : 'post'}?slug=${getSlug(item.url)}&apiRoute=${item.object}`}
                  >
                    <span>
                      <Button
                        isActive={item.object_id === activePageId}
                        text={item.title}
                        href={`/${item.object}/${getSlug(item.url)}`}
                        onClick={this.closeMenu}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Retain>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  activePageId: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.any),
};
Navigation.defaultProps = {
  items: [],
  activePageId: null,
  children: null,
};

export default Navigation;
