import React, { useEffect } from "react";
import styled from "styled-components";
import CancelIcon from "../images/icon-close-menu.svg";
import NavList from "./NavList";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 25rem;
  z-index: 100;
  transform: translateX(100%);
  opacity: 0;

  transition: all 0.5s;
  padding: 2.4rem;
  background-color: var(--col-light);

  &.active {
    transform: translateX(0%);
    transition: all 0.5s 0.3s;

    opacity: 1;
  }
`;

const CancleIconWrapper = styled.div`
  text-align: end;
  margin-bottom: 3rem;
  svg {
    cursor: pointer;
  }
`;

const ListWrapper = styled.div``;
const MobileNavigation = ({
  IsMobileMenuActive,
  setIsMobileMenuActive,
}: {
  setIsMobileMenuActive: (bool: boolean) => void;
  IsMobileMenuActive: boolean;
}) => {
  return (
    <Wrapper className={IsMobileMenuActive ? "active" : ""}>
      <CancleIconWrapper>
        <CancelIcon onClick={() => setIsMobileMenuActive(false)} />
      </CancleIconWrapper>
      <ListWrapper>
        <NavList />
      </ListWrapper>
    </Wrapper>
  );
};

export default MobileNavigation;
