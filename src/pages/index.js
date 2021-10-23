import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "../components/css/user-stylesheet.css";
import { portfolioLinks } from "../components/data";
import HeroSection from "../components/js/hero";
import AboutMe from "../components/js/aboutme";
import Contact from "../components/js/contact";
import Footer from "../components/js/footer";
import { device } from "../components/data";
import Nav from "../components/js/nav";

const { mobile, mobileL, tablet } = device;

// styles
const PageStyles = styled.main`
  padding: 0px 150px;
  font-family: var(--font-main);
  margin: 0px auto;
  max-width: 1600px;
  min-height: 100vh;
  @media ${tablet} {
    padding: 0px 100px;
  }
  @media ${mobileL} {
    padding: 0px 50px;
  }
  @media ${mobile} {
    padding: 0px 25px;
  }
`;

const FormField = styled.div`
  width: fit-content;
  position: absolute;
  top: calc(var(--space) * 1.5);
  left: calc(var(--space) * 2);

  form {
    background: var(--main-bg);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;

    .toggle {
      &:before {
        background: var(--main-bg);
        position: absolute;
        transition: transform var(--dur);
        transition-timing-function: ease-out;
        border-radius: 50%;
        content: "";
        display: block;
        top: 0.25em;
        left: 0.25em;
        width: 1em;
        height: 1em;
        transition-delay: 0s;
        transform: translateX(-1.5em);
      }
      &:after {
        background: var(--main-bg);
        position: absolute;
        transition: transform var(--dur);
        border-radius: 50%;
        content: "";
        display: block;
        top: 0.25em;
        left: 0.25em;
        width: 1em;
        height: 1em;
        transition-delay: calc(var(--dur) * 0.75);
        transition-timing-function: cubic-bezier(0.3, 1.6, 0.5, 0.7);
      }
      position: relative;
      overflow: hidden;
      background: var(--bg-inv);
      border-radius: 0.75em;
      cursor: pointer;
      width: 3em;
      height: 1.5em;
      -webkit-appearance: none;
      appearance: none;
      -webkit-tap-highlight-color: transparent;
      &:checked {
        &:after {
          transition-timing-function: ease-out;
          transition-delay: 0s;
          transform: translateX(3em);
        }
        &:before {
          transition-delay: calc(var(--dur) * 0.75);
          transition-timing-function: cubic-bezier(0.3, 1.6, 0.5, 0.7);
          transform: translateX(1.5em);
        }
        ~ {
          .curtain {
            transform: scaleX(1);
          }
        }
      }
      &:focus {
        outline: transparent;
      }
    }
    .curtain {
      position: absolute;
      transition: transform var(--dur);
      transition-timing-function: ease-out;
      top: 0;
      left: 0;
      pointer-events: none;
      width: 100%;
      height: 100%;
      transform: scaleX(0);
      transform-origin: 0 50%;
    }
    .sr {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      color: transparent;
      width: 1px;
      height: 1px;
    }
  }
`;

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
const SubHeaderStyles = styled.h2`
  display: flex;
  margin: 10px 0;
  width: 100%;
  white-space: nowrap;
  font-size: 3.3rem;
  color: var(--lightest-slate);
  text-transform: capitalize;
`;

const Projects = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;

const ProjectFlex = styled.div`
  margin: 50px 0px 0px;
  height: 100%;
  width: inherit;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 1.5rem;
`;

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const Project = styled.div.attrs((props) => props)`
  background: var(--light-bg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 1.75rem;
  display: flex;
  min-height: 30rem;
  border: 1px solid var(--black);

  transition: 0.5s;
  position: relative;
  cursor: default;

  &::before {
    position: absolute;
    content: "";
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid var(--lightest-bg);
    opacity: 1;
    visibility: visible;
    z-index: -1;
  }

  &:hover {
    background: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    &::before {
      border-color: var(--white);
    }
    .project-card {
      background-color: transparent;
    }
  }

  .project-card {
    /* z-index: 5; */
    padding: 1rem;
    box-shadow: 0 10px 20px -15px var(--main-bg-shadow);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: inherit;
    border-radius: var(--border-radius);
    background-color: var(--light-bg);
    transition: var(--transition);
    .heading {
      width: 100%;
      .project-links {
        margin-bottom: 35px;
        width: 100%;
        justify-content: space-between;
        display: flex;
        align-items: center;
        color: var(--light-tc);
        a {
          /* z-index: 50; */
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 7px;
          svg {
            width: 22px;
            height: 22px;
            &:hover {
              stroke-width: 3;
            }
            &.github {
              &:hover {
                stroke-width: 1;
                fill: currentColor;
              }
            }
          }
        }
      }

      a {
        position: relative;
        /* z-index: 1; */
      }
      .project-title {
        margin: 0px 0px 10px;
        color: var(--lightest-slate);
        font-size: var(--text-xl);
        a {
          position: static;

          &::before {
            content: "";
            display: block;
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
          }
        }
      }

      .project-description {
        color: var(--light-tc);
        font-size: var(--text-sm);
      }
    }
    .bottom {
      ul {
        display: flex;
        align-items: flex-end;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 0px;
        margin: 20px 0px 0px;
        list-style: none;
        text-transform: uppercase;
        li {
          font-family: var(--font-code);
          font-size: var(--text-xxs);
          line-height: 1.75;
          &:not(:last-of-type) {
            margin-right: 15px;
          }
        }
      }
    }
  }
  p:last-child,
  p:last-of-type {
    margin: 0px;
  }
`;

const IndexPage = () => {
  const [displayMode, setDisplayMode] = React.useState("dark");
  const bgSwitch = () => {
    displayMode === "dark" ? setDisplayMode("light") : setDisplayMode("dark");
    console.log("bg changed");
  };
  return (
    <>
      <PageStyles>
        <Helmet
          title="Madufor Chiemeka — Portfolio"
          htmlAttributes={{
            class: displayMode,
          }}
        />
        <FormField>
          <form>
            <input
              id="light-mode"
              className="toggle"
              type="checkbox"
              name="Light mode"
              role="switch"
              value="on"
              onClick={() => bgSwitch()}
            />
            <label htmlFor="light-mode" className="sr">
              Light Mode
            </label>
            <div className="curtain"></div>
          </form>
        </FormField>
        {/* <button onClick={() => bgSwitch()}>Switch Display Mode</button> */}
        <HeroSection />
      </PageStyles>
      <Nav />
      <PageStyles>
        <AboutMe />
        <Projects>
          <HeaderStyles>Projects</HeaderStyles>
          <SubHeaderStyles>My Recent Projects 📁</SubHeaderStyles>
          <ProjectFlex>
            {portfolioLinks.map((link) => (
              <Project img_src={link.img_src} key={link.rank}>
                <div className="project-card">
                  <div className="heading">
                    <div className="project-links">
                      <a
                        href={link.live_link}
                        aria-label="Open Project"
                        className="live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <title>Live Link</title>
                          <desc>A line styled icon</desc>
                          <path
                            data-name="layer2"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M30 62h32V2H2v32"
                          ></path>
                          <path
                            data-name="layer1"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M26 56V38H8m18 0L2 62"
                          ></path>
                        </svg>
                      </a>
                      {link.source_code && (
                        <a
                          href={link.source_code}
                          aria-label="Open GitHub Code"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 64 64"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="github"
                          >
                            <title>GitHub</title>
                            <desc>A solid styled icon</desc>
                            <path
                              data-name="layer1"
                              d="M32 1.952a30.019 30.019 0 0 0-9.469 58.5c1.5.281 2.063-.656 2.063-1.406v-5.625c-8.344 1.779-10.125-3.563-10.125-3.563-1.406-3.469-3.375-4.406-3.375-4.406-2.719-1.875.187-1.781.187-1.781 3 .188 4.594 3.094 4.594 3.094 2.719 4.594 7.031 3.281 8.719 2.531a6.5 6.5 0 0 1 1.875-4.031c-6.656-.75-13.688-3.375-13.688-14.812a11.5 11.5 0 0 1 3.094-8.063 11.217 11.217 0 0 1 .281-7.969s2.531-.844 8.25 3.094a28.944 28.944 0 0 1 7.5-1.031 28.4 28.4 0 0 1 7.5 1.031c5.719-3.844 8.25-3.094 8.25-3.094a11.217 11.217 0 0 1 .281 7.969 11.34 11.34 0 0 1 3.094 8.063c0 11.531-7.031 14.063-13.688 14.813a7.262 7.262 0 0 1 2.063 5.534v8.25c0 .844.562 1.687 2.063 1.406A30.019 30.019 0 0 0 32 1.952z"
                              strokeMiterlimit="10"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </a>
                      )}
                    </div>

                    <h3 className="project-title">
                      <a
                        href={link.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                      {/* {link.featured && (
                        <span style={badgeStyle} aria-label="New Badge">
                          FEATURED!
                        </span>
                      )} */}
                    </h3>
                    <div className="project-description">
                      <p>
                        {link.description
                          ? link.description
                          : "Converted a figma design into a responsive and user-friendly website"}
                      </p>
                    </div>
                  </div>

                  <div className="bottom">
                    <ul className="project-tech-list">
                      <li>ReactJS</li>
                      <li>SCSS</li>
                      <li>Firebase</li>
                      <li>Firebase</li>
                      <li>Firebase</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                </div>
              </Project>
            ))}
          </ProjectFlex>
        </Projects>
        <Contact />
      </PageStyles>
      <Footer />
    </>
  );
};

export default IndexPage;
