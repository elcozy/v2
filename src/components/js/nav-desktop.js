import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "../../components/data";
// styles

const { mobile, mobileL, tablet } = device;

const NavTag = styled.div`
  padding: 0px 150px;
  font-family: var(--font-main);
  margin: 0px auto;
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
  background: var(--main-bg);
  box-shadow: 0 28px 54px -3px var(--primary);

  z-index: 99;
  top: 0;
  position: sticky;

  .design {
    margin: 0px auto;
  max-width: 1000px;
    width: 100%;
    min-height: 50px;

    &.sticky {
      position: fixed;
      top: 0;
    }

    .main-navigation {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      color: var(--lightest-slate);
      /* z-index: 1; */
.logo{
  font-weight: bold;
}
      ul {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }

      li {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 1rem;
      }

      a {
        display: inline-block;
        width: 100%;
        margin: 0 auto;
        line-height: 1;
        text-decoration: none;
        user-select: none;
      }
    }
  }
`;

// markup
const NavDesktop = () => {
  return (
    <NavTag>
      <div className="design">
        <nav className="main-navigation">
          <div className="logo">
            <p>Chiemeka M</p>
          </div>
          <ul>
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>
              <Link to="#about-me">About Me</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavTag>
  );
};

export default NavDesktop;
