import React from "react";
import Nabvar from "../ui/Nabvar/Nabvar";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Nabvar />
      {children}
    </div>
  );
};

export default Layout;
