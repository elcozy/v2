import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "../components/css/user-stylesheet.css";
import HeroSection from "../components/js/hero";
import AboutMe from "../components/js/aboutme";
import Contact from "../components/js/contact";
import Footer from "../components/js/footer";
import { device, isDark } from "../components/data";
import Nav from "../components/js/nav";
// import Projects from "../components/js/projects";
import AnimatedIcon from "../components/js/themelogo";
import ProjectsAlt from "../components/js/projects-alt";
import Seo from "../components/js/SEO";

const { mobile, mobileL, tablet } = device;

// styles
const PageStyles = styled.main`
  padding: 0px 150px;
  background-image: linear-gradient(
    315deg,
    var(--main-bg) 0%,
    var(--primary) 74%
  );
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
  position: fixed;
  bottom: calc(var(--space) * 1.5);
  right: calc(var(--space) * 2);
  z-index: 50;
  @media ${mobile} {
    right: calc(var(--space) * 0.5);
  }
  line,
  circle {
    stroke: var(--act-white);
  }
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

const IndexPage = () => {
  const userDeviceTheme = isDark() ? "dark" : "light";

  const [displayMode, setDisplayMode] = React.useState(userDeviceTheme);
  const [transit, setTransit] = React.useState("enter-");

  const bgSwitch = () => {
    displayMode === "dark" ? setDisplayMode("light") : setDisplayMode("dark");
    setTransit("enter-active");
    setTimeout(() => {
      setTransit("enter-done");
    }, 250);
  };
  return (
    <div className={transit}>
      <Seo title="Home" />
      <PageStyles>
        <Helmet title="Madufor Chiemeka — Portfolio" defer={false}>
          <html class={displayMode} lang="en" />
          <link
          rel="icon"
          type="image/png"
          href="../images/icon.png"
        />
            <meta name="image" property="og:image" content="https://avatars.githubusercontent.com/u/61386343?v=4"/>
        </Helmet>
        <FormField>
          <AnimatedIcon bgSwitch={bgSwitch} />
        </FormField>
        <HeroSection />
      </PageStyles>
      <Nav />
      <PageStyles>
        <AboutMe />
        {/* <Projects /> */}
        <ProjectsAlt />
        <Contact />
      </PageStyles>
      <Footer />
    </div>
  );
};

export default IndexPage;
