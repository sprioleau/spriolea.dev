"use client";

import { CallToAction } from "@/schemas/types";
import { useRouter } from "next/navigation";

type Props = {
  cta: CallToAction;
  className: string;
};

export default function CallToActionButton({ cta, className }: Props) {
  const router = useRouter();

  function handleClick() {
    router.push(`#${cta.linkTarget}`);
  }

  return (
    <button
      type="button"
      className={`${className} button`}
      onClick={handleClick}
    >
      {cta.label}
    </button>
  );
}
