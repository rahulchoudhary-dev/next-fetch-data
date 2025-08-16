import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cache } from "react";

// wrap the function with cache()
export const getUsers = cache(async () => {
  return prisma.user.findMany();
});

export const getUserDetailsDb = cache(async (id: number) => {
  console.log("calling user dedtails db");

  const res = await prisma.user.findFirst({ where: { id } });
  return res;
});

export const createUserDb = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await prisma.user.create({ data: { name, email, password } });
  revalidatePath("/user", "page");
  redirect("/dashboard");
};
