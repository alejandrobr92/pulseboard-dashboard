import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

// Define API response types
interface MetricsResponse {
  activeUsers: number;
  totalTasks: number;
  activityCount: number;
}

interface UsersResponse {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

const app = express();

// Middleware with proper typing
app.use(cors());
app.use(express.json());

// Typed route handler
app.get("/api/metrics", (req: Request, res: Response<MetricsResponse>) => {
  const metrics: MetricsResponse = {
    activeUsers: 1245,
    totalTasks: 320,
    activityCount: 89,
  };

  res.json(metrics);
});

app.get("/api/users", (req: Request, res: Response<UsersResponse[]>) => {
  res.json([
    { id: "1", name: "John Doe", email: "john@test.com", role: "admin" },
    { id: "2", name: "Jane Smith", email: "jane@test.com", role: "user" },
  ]);
});

const PORT: number = 4000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
