"use client";

import Link from "next/link";
import icons from "../Icons";
import { useRouter } from "next/navigation";

type Props = {
  route: string;
};

export default function SkipToMainContentLink({ route }: Props) {
  const router = useRouter();

  function handleSkipToMainContent() {
    router.push(route);
  }

  return (
    <Link
      href={route}
      className="skip-to-main-content"
      onClick={handleSkipToMainContent}
    >
      <p className="skip-to-main-content__label">Skip to main content</p>
      {icons.arrowRight}
    </Link>
  );
}
