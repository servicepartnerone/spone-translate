import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/spo-logo-white.svg';

import './Header.scss';

const Header = () => (
  <nav className="main-header">
    <Link to="/" className="main-logo" title="Home">
      <Logo />
    </Link>
    {/* <NavLink className="link" to="/" title="Home">
      Home
    </NavLink>
    <NavLink className="link" activeClassName="active" exact to="/namespaces" title="Namespaces">
      Namespaces
    </NavLink>
    <NavLink className="link" activeClassName="active" exact to="/translations" title="Translations">
      Translations
    </NavLink> */}
    {/* <NavLink className="link" activeClassName="active" exact to="/drafts" title="Drafts">
      Drafts
    </NavLink> */}

    {/* <Link to="/create" className="link">
      + Create namespace
    </Link>
    <Link to="/create" className="link">
      + Add translation
    </Link> */}
    <Link to="/settings" className="link btn-settings">
      <span className="icon icon-settings" />
    </Link>
  </nav>
);

export default Header;
