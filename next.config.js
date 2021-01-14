module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: `/${process.env.NOTION_PAGE_ID}`,
        permanent: true
      }
    ]
  }
}