ALTER TABLE "year" ALTER COLUMN "year" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "year" ADD CONSTRAINT "year_year_unique" UNIQUE("year");