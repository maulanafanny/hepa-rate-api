ALTER TABLE "article" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "article" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "article_title_idx" ON "article" USING btree ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_name_idx" ON "user" USING btree ("name");