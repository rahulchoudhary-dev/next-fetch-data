"use client";

import { useTransition } from "react";

export function Button() {
  const [pending, startTransition] = useTransition();

  const handleClick = () =>
    startTransition(() => {
      throw new Error("Exception");
    });

  return (
    <button
      className="border-amber-200 p-8"
      type="button"
      onClick={handleClick}
    >
      Throgh uncough Error
    </button>
  );
}
