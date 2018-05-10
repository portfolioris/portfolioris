import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
// import Link from 'next/link';
import { Config } from 'config';

import PageWrapper from 'components/PageWrapper';
import Layout from 'components/organisms/Layout';
// import Menu from '../components/Menu';
import Header from 'components/organisms/Header';
import Rte from 'components/atoms/text/Rte';
// import PrimaryNav from '../components/molecules/PrimaryNav';


class Index extends Component {
  static async getInitialProps() {
    const pageRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/page?slug=sample-page`);
    const page = await pageRes.json();
    // const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed`);
    // const posts = await postsRes.json();
    // const pagesRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?_embed`);
    // const pages = await pagesRes.json();
    // return { page, posts, pages };
    return { page };
  }

  render() {
    /* const posts = this.props.posts.map((post, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    const pages = this.props.pages.map((page, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              as={`/page/${page.slug}`}
              href={`/post?slug=${page.slug}&apiRoute=page`}
            >
              <a>{page.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    */
    const {
      page,
      headerMenu,
    } = this.props;

    return (
      <Layout>
        <Header items={headerMenu.items} />
        {/* <Menu menu={this.props.headerMenu} /> */}
        <h1>{this.props.page.title.rendered}</h1>
        <Rte richText={page.content.rendered} />
        <h2>Posts</h2>
        {/* {posts} */}
        <h2>Pages</h2>
        {/* {pages} */}
      </Layout>
    );
  }
}

Index.propTypes = {
  page: PropTypes.objectOf(PropTypes.any),
  headerMenu: PropTypes.objectOf(PropTypes.any),
};

Index.defaultProps = {
  page: null,
  headerMenu: null,
};

export default PageWrapper(Index);
