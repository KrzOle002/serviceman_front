import { useState, useEffect } from "react";
import { Wrapper } from "./Navbar.styles";
import MobileNavbar from "./Mobile/MobileNavbar";
import DesktopNavbar from "./Desktop/DesktopNavbar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 860 || window.innerHeight < 570) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return <Wrapper>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</Wrapper>;
};

export default Navbar;
