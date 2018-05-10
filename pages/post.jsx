import Navigation from 'components/organisms/Navigation';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Config } from 'config';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from 'components/organisms/Layout';
import PageWrapper from 'components/PageWrapper';
import MainVisual from 'components/organisms/MainVisual';
import Streamer from 'components/organisms/Streamer';
import Footer from 'components/organisms/Footer';

class Post extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const res = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`);
    const post = await res.json();
    return { post };
  }

  render() {
    const {
      post,
      headerMenu,
      footerMenu,
    } = this.props;

    if (!post.title) return <Error statusCode={404} />;

    return (
      <Layout>
        <Navigation
          items={headerMenu.items}
          activePageId={post.id}
        >
          {(post.acf && post.acf.homepage_content) ? post.acf.homepage_content.map(layout => (
            <Fragment key={layout.acf_fc_layout}>
              {layout.acf_fc_layout === 'main_visual' ? (
                <MainVisual
                  {...layout}
                  image={layout.image || null}
                  smallImage={layout.smallImage || null}
                />
              ) : null}

              {layout.acf_fc_layout === 'streamer' ? (
                <Streamer
                  {...layout}
                />
              ) : null}
            </Fragment>
          )) : (
            <p>404</p>
          )}
          {/* <Heading level={1} className="u-macro" text={post.title.rendered} />
          <Rte richText={post.content.rendered} /> */}
          <Footer items={footerMenu.items} />
        </Navigation>
      </Layout>
    );
  }
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
  headerMenu: PropTypes.objectOf(PropTypes.any),
  footerMenu: PropTypes.objectOf(PropTypes.any),
};

Post.defaultProps = {
  post: null,
  headerMenu: null,
  footerMenu: {},
};

export default PageWrapper(Post);
