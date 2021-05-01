// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "fr", "es"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
  trailingSlash: true,
});
