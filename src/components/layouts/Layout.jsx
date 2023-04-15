import React from "react";
import Head from "next/head";
import Nabvar from "../ui/Nabvar/Nabvar";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Head>
        <title>My Store</title>
      </Head>
      <Nabvar />
      {children}
    </div>
  );
};

export default Layout;
