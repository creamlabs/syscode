"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Trophy, Medal } from "lucide-react";
import { LeaderBoardStandings } from "@/actions/leaderBoard.action";

interface User {
  id: number;
  githubUsername: string;
  image: string | null;
  email: string;
  points: number;
}

const RankBadge = ({ rank }: { rank: number }) => {
  if (rank === 1) {
    return <Trophy className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />;
  } else if (rank === 2) {
    return <Medal className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />;
  } else if (rank === 3) {
    return <Medal className="w-4 h-4 sm:w-6 sm:h-6 text-amber-700" />;
  }
  return (
    <span className="text-gray-500 font-medium text-sm sm:text-base">
      {rank}
    </span>
  );
};

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await LeaderBoardStandings();
        setUsers(
          response.map((user) => ({ ...user, points: user.points ?? 0 })),
        );
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 space-y-4 sm:space-y-6">
      <div className="text-center space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-sm sm:text-base text-gray-500">Top Contributors</p>
      </div>

      <div className="space-y-2 sm:space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-3 sm:p-4"
          >
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
              <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
                <div className="flex items-center justify-center w-6 sm:w-8">
                  <RankBadge rank={index + 1} />
                </div>
                <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src={user.image || "/api/placeholder/48/48"}
                    alt={user.githubUsername}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                    {user.githubUsername}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 truncate">
                    {user.email}
                  </span>
                </div>
              </div>
              <div className="flex items-center ml-auto">
                <div className="bg-blue-50 rounded-full px-3 py-1 sm:px-4 sm:py-2">
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">
                    {user.points} points
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
