import type { NextConfig } from "next";

// Thêm cấu hình cho phép truy cập từ yame.vn
const allowedDomains = ["yame.vn", "res.cloudinary.com", "https"];

const nextConfig: NextConfig = {
  images: {
    domains: allowedDomains,
  },
  // htmlLimitedBots: /.*/,
  /* config options here */
};

export default nextConfig;
