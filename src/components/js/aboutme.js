import * as React from "react";
import styled from "styled-components";
import { device } from "../data";

const { mobile, mobileL, tablet } = device;

// styles

const HeaderStyles = styled.h5`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--text-heading));
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 3px;
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -48%;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--primary);

    @media ${tablet} {
      max-width: 100px;
      width: 100%;
    }
    @media ${mobileL} {
      width: 100%;
    }
    @media ${mobile} {
      margin-left: 10px;
    }
  }
`;
// const SubHeaderStyles = styled.h2`
//   display: flex;
//   margin: 10px 0;
//   width: 100%;
//   white-space: nowrap;
//   font-size: 3.1rem;
//   text-transform: capitalize;
//   color: var(--lightest-slate);
// `;

const AboutMeTag = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  .description {
    padding-top: 20px;
  }
  p {
    margin: 0px 0px 15px;
    letter-spacing: 1px;
  }
  .skill-tags {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 200px));
    /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-code);
      font-size: var(--text-xs);
      &::before {
        content: "•";
        /* content: ""; */
        /* content: "▷"; */
        position: absolute;
        left: 0px;
        color: var(--white);
        font-size: var(--text-sm);
        line-height: inherit;
      }
    }
  }
`;

// markup
const AboutMe = () => {
  return (
    <AboutMeTag id="about-me">
      <HeaderStyles>About Me</HeaderStyles>
      {/* <SubHeaderStyles>A little About Me 🙂</SubHeaderStyles> */}

      <div>
        <div>
          <div className="description">
            <p>
              Hello! <br /> I'm Madufor Chiemeka and I enjoy building stuffs and
              most especially the ones that work over the web. I come from an
              engineering background, I studied Mechanical engineering during my
              undergraduate studies but I decided to switch career after then.
              {/* My interest in web development began before the completion of my
              undergraduate degree studies. I found myself editing open-source
              google chrome extensions to my preference which I found cool. Back
              then, I had no clue the basic of HTML/CSS, I just "hacked" my way
              into it and also with the help of Google I could find out how to
              go about the complex codebase. Doing this, I got to know more
              about HTML/CSS. */}
            </p>

            {/* <p>
              I enrolled to different courses on Web Development, After 2 months
              starting my first course, I built my first portfolio using pure
              VanillaJS/HTML/CSS without the use of any library. After which I
              joined a 3-month remote{" "}
              <a href="https://hng.tech/" alt="HNG">
                competitive internship
              </a>{" "}
              which I had to work on real world software with different teams
            </p> */}
            <p>
              I have worked to work with a medical startup,
              an educational agency, iGaming startup and other freelanced
              clients remotely.
            </p>
            <p>
              Here are a few languages/libraries I’ve been working with of
              recent:
            </p>
          </div>
          <ul className="skill-tags">
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>NextJS</li>
            <li>Gatsby</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>AdobeXD</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="">
          <div className="wrapper">
            <div>
              <div>
                <img alt="" role="presentation" aria-hidden="true" src="" />
              </div>
              <noscript></noscript>
            </div>
          </div>
        </div>
      </div>
    </AboutMeTag>
  );
};

export default AboutMe;
