/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/dalowa/3534-G10-Project-ISIL/main/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
