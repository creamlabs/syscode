import {
  integer,
  pgTable,
  varchar,
  timestamp,
  serial,
  pgEnum,
} from "drizzle-orm/pg-core";

export const difficultyEnum = pgEnum("difficulty", ["easy", "medium", "hard"]);
export const submissionStatusEnum = pgEnum("submission_status", [
  "pending",
  "accepted",
  "rejected",
]);

export const problemsTable = pgTable("problems", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  difficulty: difficultyEnum("difficulty").notNull(),
  totalSolved: integer("total_solved").default(0),
  hint: varchar("hint", { length: 255 }).array(),
  likes: integer("likes").default(0),
  dislikes: integer("dislikes").default(0),
  solution: varchar("solution", { length: 255 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  githubUsername: varchar("github_username", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  problemsSolved: integer("problems_solved").array(),
  attempted: integer("attempted").array(),
  points: integer("points").default(0),
});

export const submissionsTable = pgTable("submissions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  problemId: integer("problem_id")
    .notNull()
    .references(() => problemsTable.id, { onDelete: "cascade" }),
  submissionStatus: submissionStatusEnum("submission_status").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
