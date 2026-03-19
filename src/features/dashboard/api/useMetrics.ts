import { getMetrics } from "@/services/dashboard";
import { useQuery } from "@tanstack/react-query";

export function useMetrics() {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: getMetrics,
  });
}
