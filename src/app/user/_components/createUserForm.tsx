// "use client";

import { createUserDb } from "../_actions";
import { Button } from "./button";

const CreateUserForm = () => {
  const createUserAction = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await createUserDb(name, email, password);
  };

  console.log("create user page");

  return (
    <form
      action={createUserAction}
      //   method="POST"
      className="flex flex-col gap-4 p-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="border rounded p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border rounded p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="border rounded p-2"
      />
      <Button />
    </form>
  );
};

export default CreateUserForm;
