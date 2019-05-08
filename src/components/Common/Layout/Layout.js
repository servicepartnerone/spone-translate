import React from 'react';

import Header from '../Header/Header';

import './Layout.scss';

const Layout = ({ children }) => (
  <>
    <Header />

    <main className="content">{children}</main>
  </>
);

export default Layout;
