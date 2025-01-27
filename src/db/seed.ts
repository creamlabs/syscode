import { drizzle } from "drizzle-orm/node-postgres";
import { problems, requirements, users } from "./schema";
import { Pool } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

async function seed() {
  const client = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(client);
  await db.insert(problems).values([
    {
      title: "Designed an Api service with Load Balancer",
      description:
        "Design a simple load balancer system that evenly distributes incoming traffic to two web servers' traffic to two web servers.",
      difficulty: "easy",
      solution: JSON.stringify({
        nodes: [
          {
            id: "1",
            type: "input",
            data: { label: "Start" },
            position: { x: 250, y: 5 },
          },
          {
            id: "2",
            type: "default",
            data: { label: "Load Balancer" },
            position: { x: 250, y: 100 },
          },
          {
            id: "3",
            type: "output",
            data: { label: "End" },
            position: { x: 250, y: 200 },
          },
        ],
        edges: [
          { id: "e1-2", source: "1", target: "2" },
          { id: "e2-3", source: "2", target: "3" },
        ],
      }),
    },
    {
      title: "Design a Content Delivery Network(CDN)",
      description:
        "Design a CDN system that caches content at geographically distributed servers to serve users with low latency.traffic to two web servers",

      difficulty: "easy",
      solution: JSON.stringify({
        nodes: [
          {
            id: "1",
            type: "input",
            data: { label: "Request" },
            position: { x: 250, y: 5 },
          },
          {
            id: "2",
            type: "default",
            data: { label: "CDN Node" },
            position: { x: 250, y: 100 },
          },
          {
            id: "3",
            type: "output",
            data: { label: "Response" },
            position: { x: 250, y: 200 },
          },
        ],
        edges: [
          { id: "e1-2", source: "1", target: "2" },
          { id: "e2-3", source: "2", target: "3" },
        ],
      }),
    },
  ]);

  await db.insert(requirements).values([
    {
      problemId: 1,
      requirement: "Handle API requests and return responses.",
      requirementType: "functional",
    },
    {
      problemId: 1,
      requirement: "Distribute traffic evenly across multiple servers.",
      requirementType: "functional",
    },
    {
      problemId: 1,
      requirement: "Each server must handle one request at a time",
      requirementType: "functional",
    },
    {
      problemId: 1,
      requirement: "Scalable to handle increasing traffic.",
      requirementType: "non-functional",
    },
    {
      problemId: 1,
      requirement: "Low response latency (<100ms).",
      requirementType: "non-functional",
    },
    {
      problemId: 2,
      requirement:
        "The CDN should update cached content as the origin server changes.",
      requirementType: "functional",
    },
    {
      problemId: 2,
      requirement:
        "The system should provide fast and consistent access to content.",
      requirementType: "functional",
    },
    {
      problemId: 2,
      requirement: "Ensure low latency and high availability.",
      requirementType: "non-functional",
    },
    {
      problemId: 2,
      requirement:
        "The system must be scalable to serve millions of requests per second.",
      requirementType: "non-functional",
    },
  ]);

  await db.insert(users).values([
    {
      githubUsername: "johnDoe",
      image: "https://example.com/images/johndoe.png",
      email: "john.doe@example.com",
      points: 150,
    },
    {
      githubUsername: "janeSmith",
      image: "https://example.com/images/janesmith.png",
      email: "jane.smith@example.com",
      points: 200,
    },
    {
      githubUsername: "aliceBrown",
      image: "https://example.com/images/alicebrown.png",
      email: "alice.brown@example.com",
      points: 120,
    },
    {
      githubUsername: "bobWhite",
      image: "https://example.com/images/bobwhite.png",
      email: "bob.white@example.com",
      points: 180,
    },
  ]);

  console.log("Database seeded Successfully");
}
seed();
