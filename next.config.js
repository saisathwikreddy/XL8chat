/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "~/assets/styles/mixins.scss";`,
  },
}

module.exports = nextConfig
