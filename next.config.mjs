/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
    experimental: {
      taint: true,
    },
    // ...other config settings
  };
  
  export default nextConfig;


// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   output: "export",

//   trailingSlash: true,

//   basePath: "/production/kandha-web",

//   assetPrefix: "/production/kandha-web",

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;