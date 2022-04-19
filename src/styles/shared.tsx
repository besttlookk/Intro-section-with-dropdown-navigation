import styled from "styled-components";
import media from "./media";

interface Props {
  reverse: boolean;
  inline: boolean;
}

export const Section = styled.section<Props>`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
