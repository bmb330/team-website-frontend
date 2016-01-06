import React from 'react';

export default () => (
  // Navbar
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <NavbarHeader />
      <NavbarLinks />
    </div>
  </nav>
);

const NavbarHeader = () => (
  <div className="navbar-header">
    <button type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-nav"
            aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <a className="navbar-brand" href="/">
      SSWD
      <span className="small">Small Scale Web Development</span>
    </a>
  </div>
);

const NavbarLinks = () => (
  <div className="collapse navbar-collapse" id="navbar-collapse-nav">
    <ul className="nav navbar-nav navbar-right">
      <li><a href="/blog">Blog</a></li>
      <li><a href="/Projects">Projects</a></li>
      <li><a href="/team">Meet the Team</a></li>
      <li role="seperator" className="divider"></li>
      <li><a href="https://github.com/smallscalewebdev">GitHub</a></li>
    </ul>
  </div>
);
