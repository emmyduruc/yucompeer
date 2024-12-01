-- CreateEnum
CREATE TYPE "PricingTierSupportEnum" AS ENUM ('STANDARD', 'PRIORITY');

-- AlterTable
ALTER TABLE "PricingTier" ADD COLUMN     "support" "PricingTierSupportEnum" NOT NULL DEFAULT 'STANDARD';
