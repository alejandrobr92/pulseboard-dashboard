import { getMetrics } from "@/services/dashboard";
import { Metrics } from "@/types/dashboard";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useMetrics(): UseQueryResult<Metrics> {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: getMetrics,
  });
}
