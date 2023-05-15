"use client";

import { ActionIndicator } from "@/components";
import { handleKeyDown } from "@/utils";
import { useRouter } from "next/navigation";

type Props = {
  advanceToSectionSlug: string;
  className: string;
};

export default function AdvanceToNextSectionButton({
  advanceToSectionSlug,
  className,
}: Props) {
  const router = useRouter();

  function handleAdvanceSection() {
    router.push(`#${advanceToSectionSlug}`);
  }

  return (
    <div
      className={className}
      tabIndex={0}
      role="button"
      aria-label="view more button"
      onClick={handleAdvanceSection}
      onKeyDown={(e) => handleKeyDown(e, handleAdvanceSection)}
    >
      <ActionIndicator
        size="5rem"
        variant="lg"
      />
    </div>
  );
}
