import { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:4000/api/users");

  if (!res.ok) throw new Error("Failed to fecth users");

  const data: User[] = await res.json();
  return data;
}
