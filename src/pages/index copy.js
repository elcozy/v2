import * as React from "react"
import styled from "styled-components";
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const ImageStyle = styled.img`
  flex-grow: 1;
  max-width: 200;
  margin-bottom: 1rem;
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px #6f0000 solid;
`;

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

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

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const portfolioLinks = [
  {
    rank: 1,
    featured: true,
    name: "LaslesVPN",
    live_link: "https://lasles-vpn-elcozy.vercel.app/",
    source_code: "https://github.com/elcozy/Lasles-VPN",
    img_src: "lasles-vpn-elcozy.vercel.app_(1440px).png",
  },
  {
    rank: 1.02,
    name: "Betverse",
    live_link: "https://betverse.netlify.app/",
    source_code: "",
    img_src: "betverse.netlify.app_(1366px).png",
  },
  {
    rank: 1.07,
    featured: true,
    name: "Clinify",
    live_link: "https://myclinify.com/",
    source_code: "",
    img_src: "myclinify.com_(1366px).png",
  },
  {
    rank: 1.072,
    name: "Hotel Deluxe",
    live_link: "https://elcozy-hotel-deluxe.vercel.app/",
    source_code: "",
    img_src: "elcozy-hotel-deluxe.vercel.app_roomsandRates.html(1366px).png",
  },
  {
    rank: 1.08,
    name: "Stratify",
    live_link: "https://stratify-clinify.vercel.app/",
    source_code: "",
    img_src: "www.yourstratify.com_(1366px).png",
  },
  {
    rank: 1.085,
    name: "Spacestagram",
    live_link: "https://spacestagram-elcozy.netlify.app/",
    source_code: "https://github.com/elcozy/spacestagram",
    img_src: "spacestagram-elcozy.netlify.app_(1366px).png",
  },
  {
    rank: 1.09,
    featured: true,
    name: "Covid19 Nigeria Tracker",
    live_link: "https://elcozy.github.io/covid19-nigeria/",
    source_code: "https://github.com/elcozy/covid19-nigeria",
    img_src: "elcozy.github.io_covid19-nigeria_(1366px).png",
  },
  {
    rank: 1.1,
    name: "SVG URL ENCODER",
    live_link: "https://elcozy.github.io/svg-url-encoder/",
    source_code: "https://github.com/elcozy/svg-url-encoder",
    img_src: "elcozy.github.io_svg-url-encoder_(1366px).png",
  },
  {
    rank: 1.2,
    name: "Starwars",
    live_link: "https://reynolds-starwars.netlify.app/",
    source_code: "https://github.com/elcozy/Starwars-page",
    img_src: "reynolds-starwars.netlify.app_dashboard(1366px).png",
  },
  {
    rank: 2,
    name: "Photographer's Website Portfolio",
    live_link: "https://reynolds-photography.netlify.app/",
    source_code: "https://github.com/elcozy/Photagraphy-Portfolio-Template-HNG",
    img_src: "reynolds-photography.netlify.app_.png",
  },
  {
    rank: 3,
    name: "Marketing Web Template",
    live_link: "https://reynolds-marketing.netlify.app/",
    source_code:
      "https://github.com/elcozy/Team-Avenger-Envato-Marketing/tree/design-1",
    img_src: "reynolds-marketing.netlify.app_.png",
  },
  {
    rank: 4,
    name: "Blog Template",
    live_link: "https://elcozy.github.io/blog-website-template/",
    source_code: "https://github.com/elcozy/blog-website-template",
    img_src: "elcozy.github.io_blog-website-template.png",
  },
  {
    rank: 5,
    name: "Furniture Website",
    live_link: "https://reynolds-design.netlify.app/",
    source_code: "https://github.com/elcozy/woodly-designs-template",
    img_src: "reynolds-design.netlify.app_.png",
  },
  {
    rank: 6,
    name: "Scanlegal",
    live_link: "https://elcozy.github.io/Translegal-HNG/",
    source_code: "https://github.com/elcozy/Translegal-HNG",
    img_src: "covidng.000webhostapp.com_.png",
  },
  {
    rank: 7,
    name: "Pricing Component with Toggle",
    live_link: "https://elcozy.github.io/pricing-component-with-toggle/",
    source_code: "https://github.com/elcozy/pricing-component-with-toggle",
    img_src: "elcozy.github.io_pricing-component-with-toggle_.png",
  },
  {
    rank: 8,
    name: "Smart-Brain",
    live_link: "https://elcozy.github.io/smart-brain/",
    source_code: "https://github.com/elcozy/smart-brain",
    img_src: "elcozy.github.io_smart-brain_(1366px).png",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
        {portfolioLinks.map((link) => (
          <li key={link.img_src} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={link.live_link}>
                {link.name}
              </a>
              {link.featured && (
                <span style={badgeStyle} aria-label="New Badge">
                  FEATURED!
                </span>
              )}
              <p style={descriptionStyle}>{link.source_code}</p>
            </span>
            <ImageStyle
              src={`https://elcozy.github.io/img/${link.img_src}`}
              alt=""
            />
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage
