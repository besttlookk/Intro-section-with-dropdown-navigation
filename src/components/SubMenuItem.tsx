import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const ListEl = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;

  span {
    padding-top: 0.2rem;
  }

  ${media.tablet} {
    padding: 1rem 3rem;

    &:hover {
      background-color: #eee;
    }
  }
`;

const IconWrapper = styled.div`
  width: 2rem;
`;

const SubMenuItem = ({
  children,
  label,
}: {
  children?: React.ReactNode;
  label: string;
}) => {
  return (
    <ListEl>
      {children && <IconWrapper>{children}</IconWrapper>}

      <span>{label}</span>
    </ListEl>
  );
};

export default SubMenuItem;
