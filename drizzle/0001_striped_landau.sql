CREATE TABLE "requirements" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"requirement" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "requirements" ADD CONSTRAINT "requirements_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;