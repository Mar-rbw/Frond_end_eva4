/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      });
  
      return config;
    },
    devServer: {
      open: true,
    },
  };
  
  module.exports = nextConfig;
  
