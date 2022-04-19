import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import SubMenuItem from "./SubMenuItem";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 1.6rem;

  ${media.tablet} {
    align-items: stretch;
    padding: 1rem 0;
    gap: 0;
    border-radius: 8px;
    width: 130px;
  }
`;

const CompanyList = () => {
  return (
    <ListEl>
      <SubMenuItem label="History" />
      <SubMenuItem label="Our Team" />
      <SubMenuItem label="Blog" />
    </ListEl>
  );
};

export default CompanyList;
