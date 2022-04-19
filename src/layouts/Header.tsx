import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import LogoIcon from "../images/logo.svg";
import MenuIcon from "../images/icon-menu.svg";
import NavList from "../components/NavList";

const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  z-index: 25;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  height: var(--height-header);
  width: 90vw;
  max-width: 128rem;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${media.laptop} {
    gap: 6rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const DesktopNavEl = styled.nav`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

const HamburgerMenu = styled.div`
  position: relative;
  width: 32px;
  height: 28px;
  cursor: pointer;

  ${media.tablet} {
    display: none;
  }
`;

const LoginLink = styled.a`
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

const RegisterLink = styled.a`
  padding: 1rem 2rem;
  border: 2px solid var(--col-gray);
  border-radius: 12px;
  display: none;

  &:hover {
    border-color: var(--col-dark);
  }

  ${media.tablet} {
    display: block;
  }
`;
const Header = ({
  setIsMobileMenuActive,
}: {
  setIsMobileMenuActive: (bol: boolean) => void;
}) => {
  return (
    <HeaderEl>
      <HeaderWrapper>
        <LeftSide>
          <LogoIcon />

          <DesktopNavEl>
            <NavList />
          </DesktopNavEl>
        </LeftSide>

        <RightSide>
          <LoginLink href="#">Login</LoginLink>
          <RegisterLink href="#">Register</RegisterLink>
          <HamburgerMenu>
            <MenuIcon onClick={() => setIsMobileMenuActive(true)} />
          </HamburgerMenu>
        </RightSide>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
