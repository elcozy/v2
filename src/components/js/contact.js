import * as React from "react";
import styled from "styled-components";
import { device } from "../../pages/data";

// sizes
const { mobile, mobileL, tablet, desktop } = device;

// styles

const HeaderStyles = styled.h5`
  display: flex;
  align-items: center;
  position: relative;
  /* margin: 10px 0px 40px; */
  margin: 10px 0;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
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
    background-color: var(--lightest-navy);

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
  text-transform: capitalize;
  color: var(--lightest-slate);
  /* letter-spacing: 3px; */
`;

const ContactTag = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  p {
    margin: 0px 0px 15px;
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
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &::before {
        content: "▷";
        position: absolute;
        left: 0px;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: inherit;
      }
    }
  }
`;

// markup
const Contact = () => {
  return (
    <ContactTag>
      <HeaderStyles>Contact 📧</HeaderStyles>
      <SubHeaderStyles>Get In Touch 📧</SubHeaderStyles>

      <div>
        <div>
          <div>
            <HeaderStyles>Email 📧</HeaderStyles>
            <p>maduforchiemeka@gmail.com</p>

            <p>
              Here are a few languages/libraries I’ve been working with of
              recent:
            </p>
          </div>
        </div>
      </div>
    </ContactTag>
  );
};

export default Contact;
