import * as React from "react";
import styled from "styled-components";
import { device } from "../data";
import { portfolioLinks } from "../data";

// sizes
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
const SubHeaderStyles = styled.h2`
  display: flex;
  margin: 10px 0;
  width: 100%;
  white-space: nowrap;
  font-size: 3.1rem;
  color: var(--lightest-slate);
  text-transform: capitalize;
`;
const ProjectsTag = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;

const ButtonAnchor = styled.button`
  color: var(--white);
  background-color: transparent;
  border: 1px solid var(--white);
  padding: 1.25rem 1.75rem;
  font-size: var(--text-sm);
  font-family: var(--font-code);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 25px;
  &:hover {
    color: var(--main-bg);
    background-color: var(--white);
  }
`;

const ProjectFlex = styled.div`
  margin: 50px 0px 0px;
  height: 100%;
  width: inherit;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1.5rem;
`;
const Project = styled.div.attrs((props) => props)`
  /* background: var(--light-bg); */
  background: var(--primary);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 1.75rem;
  display: flex;
  /* min-height: 30rem; */
  border: 1px solid var(--black);
  height: initial;
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
    /* z-index: -1; */
  }

  &:hover {
    background: var(--primary);
    background: var(--light-bg);
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
    /* box-shadow: 0 10px 20px -15px var(--main-bg-shadow); */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: inherit;
    border-radius: var(--border-radius);
    /* background-color: var(--primary); */

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
          z-index: 9;
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
    .preview {
      margin-bottom: 1rem;
      img {
        max-width: 100%;
        height: auto;
        max-height: 768px;
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

// markup
const ProjectsAlt = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <ProjectsTag id="projects">
      <HeaderStyles>Projects</HeaderStyles>
      <SubHeaderStyles>My Recent Projects 📁</SubHeaderStyles>
      <ProjectFlex>
        {portfolioLinks?.slice(0, 6).map((link) => (
          <Project img_src={link.img_src} key={link.rank}>
            <ProjectCard {...link} />
          </Project>
        ))}
        {showMore &&
          portfolioLinks?.slice(6).map((link) => (
            <Project img_src={link.img_src} key={link.rank}>
              <ProjectCard {...link} />
            </Project>
          ))}
      </ProjectFlex>
      <div>
        <ButtonAnchor
          as="button"
          className="show-more"
          onClick={() => setShowMore(!showMore)}
        >
          Show
          {!showMore ? " More" : " Less"}
        </ButtonAnchor>
      </div>
    </ProjectsTag>
  );
};

export default ProjectsAlt;

const ProjectCard = (link) => {
  const {
    live_link,
    name,
    source_code,
    description,
    img_src2,
    img_src,
    stack_used,
  } = link;
  const dummy_stack = ["reactjs", "scss", "firebase", "firebase"];
  return (
    <div className="project-card">
      <div className="heading">
        <div className="project-links">
          <a
            href={live_link}
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
          {source_code && (
            <a
              href={source_code}
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
        <div className="preview">
          <img
            src={
              img_src2
                ? `https://www.maduforchiemeka.com/Portfolio-v1/img/${img_src2}`
                : img_src
            }
            alt="img preview"
          />
        </div>

        <h3 className="project-title">
          <a href={live_link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>

        <div className="project-description">
          <p>
            {description
              ? description
              : "Converted a figma design into a responsive and user-friendly website"}
          </p>
        </div>
      </div>

      <div className="bottom">
        <ul className="project-tech-list">
          {stack_used
            ? stack_used.map((a) => <li>{a}</li>)
            : dummy_stack.map((a) => <li>{a}</li>)}
        </ul>
      </div>
    </div>
  );
};
