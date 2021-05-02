// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  [withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
  })]

]);
