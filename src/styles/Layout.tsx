import React, { useState } from "react";
import styled from "styled-components";
import MobileNavigation from "../components/MobileNavigation";
import { Header } from "../layouts";
import GlobalStyle from "./GlobalStyles";
import media from "./media";

const MobileNavWrapper = styled.div`
  ${media.tablet} {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  transform: translateX(-100%);
  transition: all 0.3s 0.3s;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);

  &.active {
    transform: translateX(0%);
    transition: all 0.3s;
  }
`;

// export interface DropdonwType = {

// }
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [IsMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <>
      <GlobalStyle />
      <MobileNavWrapper>
        <Overlay
          className={IsMobileMenuActive ? "active" : ""}
          onClick={() => setIsMobileMenuActive(false)}
        />
        <MobileNavigation
          setIsMobileMenuActive={setIsMobileMenuActive}
          IsMobileMenuActive={IsMobileMenuActive}
        />
      </MobileNavWrapper>
      <Header setIsMobileMenuActive={setIsMobileMenuActive} />

      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
