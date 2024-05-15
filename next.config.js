module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/1',
        destination: '/blog/should-web-developers-learn-wordpress',
        permanent: true,
      },
    ]
  },
}