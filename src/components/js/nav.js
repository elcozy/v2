import * as React from "react";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
// styles

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

// markup
const Nav = () => {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 992);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      window.innerWidth >= 992 ? setIsDesktop(true) : setIsDesktop(false);
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const [stickyNav, setStickyNav] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > window.innerHeight
      ? setStickyNav(true)
      : setStickyNav(false);
      console.log(stickyNav);
    };
    window.addEventListener("scroll", handleScroll);

    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return <>{isDesktop ? <NavDesktop stickyNav={stickyNav} /> : <NavMobile />}</>;
};

export default Nav;
