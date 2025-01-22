CREATE TYPE "public"."requirement_type" AS ENUM('functional', 'non-functional');--> statement-breakpoint
ALTER TABLE "requirements" ADD COLUMN "requirement_type" "requirement_type" NOT NULL;