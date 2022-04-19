import React from "react";
import styled from "styled-components";
import DatabizLogo from "../images/client-databiz.svg";
import AudiophileLogo from "../images/client-audiophile.svg";
import MarkerLogo from "../images/client-maker.svg";
import MeetLogo from "../images/client-meet.svg";
import media from "../styles/media";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;

  ${media.tablet} {
    justify-content: flex-start;
    gap: 1rem;
  }

  ${media.laptop} {
    gap: 5rem;
  }
`;

const ClientList = () => {
  return (
    <Wrapper>
      <DatabizLogo />
      <AudiophileLogo />
      <MeetLogo />
      <MarkerLogo />
    </Wrapper>
  );
};

export default ClientList;
