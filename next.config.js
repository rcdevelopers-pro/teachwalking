/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // experimental: {
  //   serverActions: true,
  // },
  optimizeFonts: false,
  output: "export",
};

module.exports = nextConfig;
