import React from "react";
import Navbar3 from "./Navbar3";
import Footer from "./Footer";
import Routers from "../routes/Router";

const PageLayout = () => {
  return (
    <div>
      <Navbar3 />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
