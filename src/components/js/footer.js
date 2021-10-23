import * as React from "react";
import styled from "styled-components";
import { device } from "../data";

// sizes
const { mobile, mobileL, tablet } = device;

// styles
const PageStyles = styled.main`
  padding: 30px 150px;
  background-color: var(--light-bg);
  font-family: -apple-system, Roboto, sans-serif, serif;
  margin: 0px auto;
  /* width: 100%; */
  max-width: 1600px;
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
const FooterTag = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
  width: 100%;
  @media ${mobile} {
    flex-direction: column;
    gap: 10px;
  }
  .others-c {
    display: flex;
    gap: 2rem;
    .social-container {
      position: relative;
      padding: 2rem 1rem;
      border: 0;
      &:hover {
        a {
          svg {
            color: var(--bg);
          }
        }
      }
      a {
        align-items: center;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        text-transform: capitalize;
        color: rgb(121, 117, 117);
        font-family: Calibre-Medium, sans-serif;
        text-decoration: none;
        transition: color 0.3s ease-in-out 0s;
        svg {
          height: 22px;
          width: 22px;
          color: var(--slate);
        }
        &:after {
          content: "";
          position: absolute;
          top: -2rem;
          left: -1rem;
          height: calc(100% + 4rem);
          width: calc(100% + 2rem);
        }
      }
    }

    flex: 1 0;
  }
  footer {
    /* width: 100%; */
    display: flex;
    justify-content: center;

    .name {
      display: flex;
      align-items: center;
    }
  }
`;

// markup
const Footer = () => {
  return (
    <PageStyles>
      <FooterTag>
        <div className="others-c">
          <div className="social-container">
            <a
              href="https://www.linkedin.com/in/chiemekam/"
              target="_blank"
              aria-label="Linkedin"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="feather feather-linkedin"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
          <div className="social-container">
            <a
              href="https://github.com/elcozy"
              target="_blank"
              aria-label="GitHub"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          <div className="social-container">
            <a
              href="https://www.instagram.com/relnoldsc"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <div className="social-container">
            <a
              href="https://twitter.com/relnolds"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <footer>
          <div className="name">© 2021 Madufor Chiemeka</div>
        </footer>
      </FooterTag>
    </PageStyles>
  );
};

export default Footer;
