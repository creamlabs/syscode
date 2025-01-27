import { db } from "@/db";
import { users } from "@/db/schema";
import { desc } from "drizzle-orm";

export const LeaderBoardStandings = async () => {
  try {
    const sortedUsers = await db
      .select()
      .from(users)
      .orderBy(desc(users.points));

    return sortedUsers;
  } catch (error) {
    console.error("Error fetching leaderboard standings:", error);
    throw new Error("Unable to fetch leaderboard standings.");
  }
};
