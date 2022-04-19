import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ClientList from "../components/ClientList";
import media from "../styles/media";

const Section = styled.section`
  margin-inline: auto;
  width: 90vw;
  max-width: 128rem;

  ${media.tablet} {
    display: flex;
    align-items: center;
  }
`;

const MobileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;

  ${media.tablet} {
    display: none;
  }
`;

const DesktopImageWrapper = styled.div`
  display: none;
  position: relative;

  ${media.tablet} {
    display: block;
    height: calc(100vh - 8rem);
    width: 40%;
  }
`;

const Content = styled.div`
  padding: 5rem 1.6rem;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 3.6rem;
  }

  p {
    max-width: 40rem;
    margin-inline: auto;
    margin-bottom: 2.5rem;
  }

  ${media.tablet} {
    text-align: start;
    width: 60%;

    h1 {
      margin-bottom: 3rem;
      font-weight: 4rem;
    }

    p {
      margin-inline: 0 auto;
      margin-bottom: 3.5rem;
    }
  }

  ${media.laptop} {
    h1 {
      font-size: 6.4rem;
      margin-bottom: 4rem;
      span {
        display: block;
      }
    }

    p {
      margin-bottom: 4rem;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  font-weight: 700;
  background-color: var(--col-dark);
  font-size: 1.8rem;
  color: var(--col-light);
  padding: 1.4rem 2rem;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.7s;

  &:hover {
    background-color: transparent;
    color: var(--col-dark);
    border-color: var(--col-dark);
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <MobileImageWrapper>
        <Image
          src="/image-hero-mobile.png"
          objectFit="cover"
          alt="hero"
          layout="fill"
          objectPosition="top"
        />
      </MobileImageWrapper>

      <Content>
        <h1>
          Make <span>remote work</span>
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </p>

        <Button href="#">Learn more</Button>

        <ClientList />
      </Content>

      <DesktopImageWrapper>
        <Image
          src="/image-hero-desktop.png"
          objectFit="cover"
          alt="hero"
          layout="fill"
          objectPosition="top"
        />
      </DesktopImageWrapper>
    </Section>
  );
};

export default HeroSection;
