import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === 'true' ? (process.env.PAGES_BASE_PATH ?? '/regression-quiz') : '',
};
export default config;
