import {
  integer,
  pgTable,
  varchar,
  timestamp,
  serial,
  pgEnum,
  text,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const difficultyEnum = pgEnum("difficulty", ["easy", "medium", "hard"]);
export const submissionStatusEnum = pgEnum("submission_status", [
  "pending",
  "accepted",
  "rejected",
]);
export const requirementTypeEnum = pgEnum("requirement_type", [
  "functional",
  "non-functional",
]);

export const problems = pgTable("problems", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  difficulty: difficultyEnum("difficulty").notNull(),
  totalSolved: integer("total_solved").default(0),
  likes: integer("likes").default(0),
  dislikes: integer("dislikes").default(0),
  solution: text("solution").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  githubUsername: varchar("github_username", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  points: integer("points").default(0),
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  problemId: integer("problem_id")
    .notNull()
    .references(() => problems.id, { onDelete: "cascade" }),
  submissionStatus: submissionStatusEnum("submission_status").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const hints = pgTable("hints", {
  id: serial("id").primaryKey(),
  problemId: integer("problem_id")
    .notNull()
    .references(() => problems.id, { onDelete: "cascade" }),
  hint: varchar("hint", { length: 255 }).notNull(),
});

export const requirements = pgTable("requirements", {
  id: serial("id").primaryKey(),
  problemId: integer("problem_id")
    .notNull()
    .references(() => problems.id, { onDelete: "cascade" }),
  requirement: varchar("requirement", { length: 255 }).notNull(),
  requirementType: requirementTypeEnum("requirement_type").notNull(),
});

//Relations
export const usersRelations = relations(users, ({ many }) => ({
  submissions: many(submissions),
}));

export const problemsRelations = relations(problems, ({ many }) => ({
  submissions: many(submissions),
  hints: many(hints),
  requirements: many(requirements),
}));

export const submissionsRelations = relations(submissions, ({ one }) => ({
  user: one(users, {
    fields: [submissions.userId],
    references: [users.id],
  }),
  problem: one(problems, {
    fields: [submissions.problemId],
    references: [problems.id],
  }),
}));

export const hintsRelations = relations(hints, ({ one }) => ({
  problem: one(problems, {
    fields: [hints.problemId],
    references: [problems.id],
  }),
}));

export const requirementsRelations = relations(requirements, ({ one }) => ({
  problem: one(problems, {
    fields: [requirements.problemId],
    references: [problems.id],
  }),
}));

export type Problems = typeof problems;
export type Users = typeof users;
export type Submissions = typeof submissions;
export type Hints = typeof hints;
