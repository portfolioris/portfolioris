import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Heading from 'components/atoms/text/Heading';
import Rte from 'components/atoms/text/Rte';

const getSlug = (url) => {
  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';
};

const Footer = ({
  items,
}) => (
  <footer>
    <Layer
      background="black"
    >
      <Retain>
        <div className="o-layout  o-layout--gutter">
          <div className="o-layout__cell  u-fraction--6of12@lap  u-fraction--3of12@desk">
            <div className="sign-group--tiny">
              <Heading
                level={6}
                text="Locatie Den Bosch"
                className="u-mb--tiny"
              />
              <Rte
                className="u-milli"
                richText="<p>Prins Bernhardstraat 14<br>5211 HE Den Bosch<br>Postbus 1147<br>5200 BD Den Bosch</p>"
              />
            </div>
          </div>
          <div className="o-layout__cell  u-fraction--6of12@lap  u-fraction--3of12@desk">
            <div className="sign-group--tiny">
              <Heading
                level={6}
                text="Locatie Rotterdam"
                className="u-mb--tiny"
              />
              <Rte
                className="u-milli"
                richText="<p>Schiekade 189<br>3013 BR Rotterdam</p>"
              />
            </div>
          </div>
          <div className="o-layout__cell  u-fraction--6of12@lap  u-fraction--3of12@desk">
            <div className="sign-group--tiny">
              <Heading
                level={6}
                text="Contact"
                className="u-mb--tiny"
              />
              <Rte
                className="u-milli"
                richText='<p>T: <a href="tel:073 68 11 002">073 68 11 002</a><br />F: 073 68 11 099<br />E: <a href="mailto:info@colours.nl">info@colours.nl</a><br />NL43RABO0306087049</p>'
              />
            </div>
          </div>
          <div className="o-layout__cell  u-fraction--6of12@lap  u-fraction--3of12@desk">
            <div className="sign-group--tiny">
              <Heading
                level={6}
                text="Supportteam"
                className="u-mb--tiny"
              />
              <Rte
                className="u-milli"
                richText='<p>T: <a href="tel:073 68 11 030">073 68 11 030</a><br />E: <a href="mailto:helpdesk@colours.nl">helpdesk@colours.nl</a></p>'
              />
            </div>
          </div>
        </div>
      </Retain>
    </Layer>
    <Layer size="small">
      <Retain>
        <div className="u-milli">
          <div className="o-layout  o-layout--gutter-small">
            <div className="o-layout__cell  o-layout__cell--fit">
              <Rte richText="© Colours 2018" className="u-mb-flatten" />
            </div>
            <div className="o-layout__cell  o-layout__cell--fit">
              <ul className="o-layout  o-layout--gutter-small  u-mb-flatten">
                {items.map(item => (
                  <li
                    key={item.ID}
                    className="o-layout__cell  o-layout__cell--fit"
                  >
                    <Link
                      as={`/${item.object}/${getSlug(item.url)}`}
                      href={`/${item.object === 'category' ? 'category' : 'post'}?slug=${getSlug(item.url)}&apiRoute=${item.object}`}
                    >
                      <a
                        href={`/${item.object}/${getSlug(item.url)}`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Retain>
    </Layer>
  </footer>
);

Footer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};
Footer.defaultProps = {
  items: [],
};

export default Footer;
