"use client";

import { handleCopyEmailToClipboard } from "@/utils";

type Props = {
  email: string;
  className: string;
};

const CopyEmailButton = ({ email, className }: Props) => {
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
};

export default CopyEmailButton;
