import { Fragment } from "react";
import Header from "./Header";
import React from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
