import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/metrics", (req, res) => {
  res.json({
    activeUsers: 1245,
    totalTasks: 320,
    activityCount: 89,
  });
});

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhos:${PORT}`),
);
