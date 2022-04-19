import React, { useRef } from "react";
import styled from "styled-components";
import media from "../styles/media";
import CompanyList from "./CompanyList";
import FeatireList from "./FeatireList";
import NavItem from "./NavItem";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.laptop} {
    gap: 3.5rem;
  }
`;

const NavList = () => {
  const featureRef = useRef<HTMLInputElement>(null);
  const compannyRef = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
      <NavItem label="Features" customRef={featureRef}>
        <FeatireList />
      </NavItem>
      <NavItem label="Company" customRef={compannyRef}>
        <CompanyList />
      </NavItem>
      <NavItem label="Careers"></NavItem>
      <NavItem label="About"></NavItem>
    </Wrapper>
  );
};

export default NavList;
