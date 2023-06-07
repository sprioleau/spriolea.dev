"use client";

import { CallToAction } from "@/schemas/types";
import Link from "next/link";
// import { useRouter } from "next/navigation";

type Props = {
  cta: CallToAction;
  className: string;
};

export default function CallToActionButton({ cta, className }: Props) {
  // const router = useRouter();

  // function handleClick() {
  //   router.push(`#${cta.linkTarget}`);
  // }

  return (
    <Link
      href={`/#${cta.linkTarget}`}
      type="button"
      className={`${className} button`}
      // onClick={handleClick}
    >
      {cta.label}
    </Link>
  );
}
