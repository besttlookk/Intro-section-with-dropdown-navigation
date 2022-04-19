import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "../styles/media";

const ListEl = styled.li`
  cursor: pointer;

  ${media.tablet} {
    position: relative;
  }
`;

const Label = styled.span<{ isArrow: boolean }>`
  position: relative;
  display: inline-flex;
  font-size: 1.7rem;
  font-weight: 700;
  transition: all 0.3s;

  &::after {
    content: url(/icon-arrow-down.svg);
    margin-left: 1rem;
    margin-bottom: 0.2rem;
    display: ${(p) => (p.isArrow ? "block" : "none")};
    transition: all 0.3s;
  }

  &.active::after {
    transform: rotate(180deg);
  }

  &:hover {
    color: var(--col-dark);
  }
`;
const SubMenu = styled.div`
  ${media.tablet} {
    position: absolute;
    top: 35px;
    right: 0;
    background-color: var(--col-light);
    box-shadow: 0 5px 40px 6px rgba(0, 0, 0, 0.2);
  }
`;

const NavItem = ({
  label,
  children,
  customRef,
}: {
  label: string;
  children?: React.ReactNode;
  customRef?: React.RefObject<HTMLInputElement>;
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  useEffect(() => {
    const handleMouseDownClick = (e: MouseEvent) => {
      if (
        customRef &&
        customRef.current &&
        !customRef.current.contains(e.target as HTMLElement)
      ) {
        setDropdownActive && setDropdownActive(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDownClick);

    return () =>
      document.removeEventListener("mousedown", handleMouseDownClick);
  }, [customRef, setDropdownActive]);
  return (
    <>
      <ListEl>
        <Label
          isArrow={children ? true : false}
          ref={customRef}
          onClick={
            customRef ? () => setDropdownActive(!dropdownActive) : undefined
          }
          className={dropdownActive ? "active" : ""}
        >
          {label}
        </Label>
        {dropdownActive && <SubMenu>{children}</SubMenu>}
      </ListEl>
    </>
  );
};

export default NavItem;
