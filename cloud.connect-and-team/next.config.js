// next.config.js

const { clerkMiddleware } = require("@clerk/nextjs/server");

module.exports = {
  async rewrites() {
    return [
      {
        source: '/(home|main)/:path*',
        destination: '/:path*',
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};
