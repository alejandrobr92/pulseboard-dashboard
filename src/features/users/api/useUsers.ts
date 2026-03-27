import { getUsers } from "@/services/users";
import { User } from "@/types/user";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useUsers(): UseQueryResult<User[]> {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
