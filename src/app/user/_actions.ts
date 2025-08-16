import { prisma } from "@/lib/prisma";
import { cache } from "react";

// wrap the function with cache()
export const getUsers = cache(async () => {
  return prisma.user.findMany();
});

export const getUserDetailsDb = cache(async (id: number) => {
  const res = await prisma.user.findFirst({ where: { id } });
  return res;
});
