"use client";

import { handleCopyEmailToClipboard } from "@/utils";

type Props = {
  email: string;
  className: string;
};

export default function CopyEmailButton({ email, className }: Props) {
  return (
    <span
      className={className}
      role="button"
      tabIndex={0}
      onClick={() => handleCopyEmailToClipboard(email)}
    >
      {email}
    </span>
  );
}
