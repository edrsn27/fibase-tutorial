import React from "react";
import Nav from "../components/Navigations/Nav";
import Footer from "../components/Footers/Footer";
export default function Auth({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
