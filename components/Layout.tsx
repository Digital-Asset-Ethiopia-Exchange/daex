import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <div>
      <Header />
      {children}
      { isActive("/") && <Footer /> }
    </div>
  );
};

export default Layout;
