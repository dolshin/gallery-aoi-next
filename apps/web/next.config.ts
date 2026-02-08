import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // vanilla-extractのプラグインが TurboPack 非対応のため
  turbopack: undefined,
};

export default withVanillaExtract(nextConfig);
