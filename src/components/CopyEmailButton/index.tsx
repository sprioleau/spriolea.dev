"use client";

import { handleCopyEmailToClipboard } from "@/utils";

export default function CopyEmailButton({ email }: { email: string }) {
  return (
    <span
      className="info-rail__link text-link"
      role="button"
      tabIndex={0}
      onClick={() => handleCopyEmailToClipboard(email)}
    >
      {email}
    </span>
  );
}
