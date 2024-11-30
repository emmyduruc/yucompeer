import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.REACT_APP_BACKEND_URL,
  }
};

export default nextConfig;
