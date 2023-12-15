/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');
module.exports = withNextIntl(nextConfig);
