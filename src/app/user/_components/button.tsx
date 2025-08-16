"use client";

import { useFormStatus } from "react-dom";

export function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    >
      {pending ? "Submitting" : "Create User"}
    </button>
  );
}
