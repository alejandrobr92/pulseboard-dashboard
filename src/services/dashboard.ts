import { Metrics } from "@/types/dashboard";

export async function getMetrics(): Promise<Metrics> {
  const response = await fetch("http://localhost:4000/api/metrics");
  if (!response.ok) throw new Error("Failed to fetch metrics");

  const data: Metrics = await response.json();
  return data;
}
