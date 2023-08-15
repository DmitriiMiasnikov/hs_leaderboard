/** @type {import('next').NextConfig} */
export default () => {
  const plugins = [];
  return plugins.reduce((acc, next) => next(acc), {
    webpack: (config) => {  
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    env: {
      API_URL: process.env.API_URL,
    },
  });
};
