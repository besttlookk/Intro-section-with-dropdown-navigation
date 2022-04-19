import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";

interface PropType {
  isVisible: boolean;
}

const TopButtonEl = styled.div<PropType>`
  position: fixed;
  bottom: 2rem;
  right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 50;
  background-color: hsl(167, 40%, 24%);
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};

  ${media.tablet} {
    bottom: 6rem;
    right: 6rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transform: scale(0.6);
    path {
      fill: white;
    }
  }
`;

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  let rootElement: HTMLElement; // html element

  if (typeof window !== "undefined") {
    rootElement = document.documentElement;
    document.addEventListener("scroll", handleScroll);
  }

  const handleClick = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <TopButtonEl isVisible={isVisible} onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
      </svg>
      {/* <UpIcon style={{ transform: "scale(0.5)" }} /> */}
    </TopButtonEl>
  );
};

export default GoToTopButton;
