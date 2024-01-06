import React from "react";
import Navigation from "../navigation";
import Footer from "../footer";

interface PROPS {
  children: React.ReactNode;
}
export const Layout: React.FC<PROPS> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* <Footer /> */}
    </>
  );
};
