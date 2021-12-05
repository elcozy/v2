const size = {
  mobile: "576px",
  mobileL: "768px",
  tablet: "992px",
  desktop: "1080px",
  desktopL: "1440px",
};

// export const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches
export const isDark = () => {
  if (typeof window !== `undefined`)
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
};

export const portfolioLinks = [
  {
    rank: 1,
    featured: true,
    name: "LaslesVPN",
    live_link: "https://lasles-vpn-elcozy.vercel.app/",
    source_code: "https://github.com/elcozy/Lasles-VPN",
    description: "LaslesVPN, a VPN application's landing page.",
    img_src: "https://i.ibb.co/yVcCgRj/lasles.png",
  },
  {
    rank: 1.02,
    name: "Betverse",
    live_link: "https://betverse.netlify.app/",
    source_code: "",
    description: "An iGaming betting website's landing page",
    img_src: "https://i.ibb.co/tXtbbcM/betverse.png",
  },
  {
    rank: 1.07,
    featured: true,
    name: "Clinify",
    live_link: "https://myclinify.com/",
    source_code: "",
    description:
      "Clinify is a health information management system that leverages the capabilities of Artificial intelligence to improve health outcomes... ",
    img_src: "https://i.ibb.co/7jLwChF/myclinify.png",
  },
  {
    rank: 1.072,
    name: "Hotel Deluxe",
    live_link: "https://elcozy-hotel-deluxe.vercel.app/",
    source_code: "",
    description: "A hotel website template.",
    img_src: "https://i.ibb.co/HqcXs0W/deluxe.png",
  },
  {
    rank: 1.08,
    name: "Stratify",
    live_link: "https://stratify-clinify.vercel.app/",
    source_code: "",
    description: "",
    img_src: "www.yourstratify.com_\\(1366px\\).png",
    img_src2: "www.yourstratify.com_(1366px).png",
  },
  {
    rank: 1.085,
    name: "Spacestagram",
    live_link: "https://spacestagram-elcozy.netlify.app/",
    source_code: "https://github.com/elcozy/spacestagram",
    description: "",
    img_src: "spacestagram-elcozy.netlify.app_\\(1366px\\).png",
    img_src2: "spacestagram-elcozy.netlify.app_(1366px).png",
  },
  {
    rank: 1.09,
    featured: true,
    name: "Covid19 Nigeria Tracker",
    live_link: "https://elcozy.github.io/covid19-nigeria/",
    source_code: "https://github.com/elcozy/covid19-nigeria",
    description:
      "A covid19 NG tracker dispalying data in a visual form on the countries map, It gets updated daily from the API",
    img_src: "https://i.ibb.co/Kz6TsGj/covid19.png",
  },
  {
    rank: 1.1,
    name: "SVG URL ENCODER",
    live_link: "https://elcozy.github.io/svg-url-encoder/",
    source_code: "https://github.com/elcozy/svg-url-encoder",
    description:
      "SVG URL encoder is an app that is used to encode the SVG code into a base64 code",
    img_src: "elcozy.github.io_svg-url-encoder_\\(1366px\\).png",
    img_src2: "elcozy.github.io_svg-url-encoder_(1366px).png",
  },
  {
    rank: 1.2,
    name: "Starwars",
    live_link: "https://reynolds-starwars.netlify.app/",
    source_code: "https://github.com/elcozy/Starwars-page",
    description: "",
    img_src: "reynolds-starwars.netlify.app_dashboard\\(1366px\\).png",
    img_src2: "reynolds-starwars.netlify.app_dashboard(1366px).png",
  },
  {
    rank: 2,
    name: "Photographer's Website Portfolio",
    live_link: "https://reynolds-photography.netlify.app/",
    source_code: "https://github.com/elcozy/Photagraphy-Portfolio-Template-HNG",
    description: "A photographer's portfolio website template",
    img_src2: "reynolds-photography.netlify.app_.png",
  },
  {
    rank: 3,
    name: "Marketing Web Template",
    live_link: "https://reynolds-marketing.netlify.app/",
    source_code:
      "https://github.com/elcozy/Team-Avenger-Envato-Marketing/tree/design-1",
    description: "A marketer's portfolio website template",
    img_src2: "reynolds-marketing.netlify.app_.png",
  },
  {
    rank: 4,
    name: "Blog Template",
    live_link: "https://elcozy.github.io/blog-website-template/",
    source_code: "https://github.com/elcozy/blog-website-template",
    description: "A blog ",
    img_src2: "elcozy.github.io_blog-website-template.png",
  },
  {
    rank: 5,
    name: "Furniture Website",
    live_link: "https://reynolds-design.netlify.app/",
    source_code: "https://github.com/elcozy/woodly-designs-template",
    description: "",
    img_src2: "reynolds-design.netlify.app_.png",
  },
  {
    rank: 6,
    name: "Scanlegal",
    live_link: "https://elcozy.github.io/Translegal-HNG/",
    source_code: "https://github.com/elcozy/Translegal-HNG",
    description: "",
    img_src: "https://i.ibb.co/xgLpRXg/scanlegal.png",
  },
  {
    rank: 7,
    name: "Pricing Component with Toggle",
    live_link: "https://elcozy.github.io/pricing-component-with-toggle/",
    source_code: "https://github.com/elcozy/pricing-component-with-toggle",
    description: "",
    img_src2: "elcozy.github.io_pricing-component-with-toggle_.png",
  },
  {
    rank: 8,
    name: "Smart-Brain",
    live_link: "https://elcozy.github.io/smart-brain/",
    source_code: "https://github.com/elcozy/smart-brain",
    description: "A web app that scans and detects faces on uploaded images ",
    img_src: "https://i.ibb.co/C8Z2CgT/smart-brain.png",
  },
];
