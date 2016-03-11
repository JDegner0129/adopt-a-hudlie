import React, { PropTypes } from 'react';

export default function Layout(props: Object) : React.DOM {
  return (
    <div className="layout">
      <nav className="ko-nav">
        <ul className="ko-nav-left">
          <li>
            <a href="#" className="ko-nav-team">
              <span className="ko-nav-team-name">Adopt-A-Hudlie</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="ko-wrap">
        <div className="ko-main">
          <div className="ko-subheader">
            <h1>{ props.header }</h1>
          </div>

          <section className="ko-content ko-article">
            {props.children}
          </section>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
