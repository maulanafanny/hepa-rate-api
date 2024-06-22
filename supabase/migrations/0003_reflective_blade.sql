CREATE TABLE IF NOT EXISTS "criteria" (
	"id" serial PRIMARY KEY NOT NULL,
	"total_case" integer NOT NULL,
	"total_population" integer NOT NULL,
	"sanitation_rate" double precision NOT NULL,
	"clean_water_rate" double precision NOT NULL,
	"safe_house_rate" double precision NOT NULL,
	"district_id" integer NOT NULL,
	"year_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "district" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "year" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "article" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "criteria" ADD CONSTRAINT "criteria_district_id_district_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."district"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "criteria" ADD CONSTRAINT "criteria_year_id_year_id_fk" FOREIGN KEY ("year_id") REFERENCES "public"."year"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "district_name_idx" ON "district" USING btree ("name");