import * as React from "react";
import styled from "styled-components";
import { device } from "../data";

const { mobile } = device;

// styles
const Hero = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;

  h5 {
    margin: 0px 0px 30px 4px;
    color: var(--white);
    font-family: var(--font-code);
    font-size: clamp(var(--text-sm), 5vw, var(--text-md));
    font-weight: 400;
  }
  .big-heading {
    margin: 0px;
    font-size: clamp(27px, 5.2vw, 82px);
    font-weight: 600;
    color: var(--light-tc);
    line-height: 1.1;
  }
  h3.medium-heading {
    margin: 0px;
    font-size: clamp(25px, 4.7vw, 77px);
    font-weight: 600;
    line-height: 1.1;

    -webkit-text-stroke: px var(--slate);
    color: transparent;

    @media ${mobile} {
      color: var(--slate);
      -webkit-text-stroke: 0px transparent;
    }
  }
  p {
    margin: 20px 0px 0px;
    max-width: 540px;
  }
`;

const ButtonAnchor = styled.button`
  color: var(--white);
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--text-sm);
  font-family: var(--font-code);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 50px;
  &:hover {
    color: var(--main-bg);
    background-color: var(--white);
  }
`;

// markup
const HeroSection = () => {
  return (
    <Hero id="#">
      <div>
        <h5>Hi👋, I'm</h5>
      </div>
      <div>
        <h2 className="big-heading">
          Madufor <span>Chiemeka</span>.
        </h2>
      </div>
      <div>
        <h3 className="medium-heading">Frontend Web Developer.</h3>
      </div>
      <div>
        <p>
          I build websites with focus on user-friendly responsive websites and
          web applications.
        </p>
      </div>
      
      <div>
        <ButtonAnchor
          as="a"
          className="contact-me"
          href="#contact-me"
          rel="noreferrer"
        >
          Contact Me
        </ButtonAnchor>
      </div>
    </Hero>
  );
};

export default HeroSection;
