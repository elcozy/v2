import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "../../components/data";
// styles

const { mobile, mobileL, tablet } = device;

// const NavTag = styled.div`
const NavTag = styled.div.attrs((props) => ({ className: props.className }))`
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

  &.sticky {
    position: sticky;
    z-index: 99;
    top: 0;
  }

  .design {
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
        /* color: var(--light-tc); */
        line-height: 1;
        text-decoration: none;
        user-select: none;
      }
    }
  }
`;

// markup

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const NavDesktop = (stickyNav) => {

  return (
    <>
      <NavTag className={`${stickyNav ? "sticky":''}`}>
        <div className="design">
          <nav className="main-navigation">
            <div className="logo">
              <p>Reynolds M</p>
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
    </>
  );
};

export default NavDesktop;
