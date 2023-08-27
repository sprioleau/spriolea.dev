import { ActionIndicator } from "@/components";

type Props = {
  advanceToSectionSlug: string;
  className: string;
};

const AdvanceToNextSectionButton = ({
  advanceToSectionSlug,
  className,
}: Props) => {
  return (
    <a
      className={className}
      href={`/#${advanceToSectionSlug}`}
    >
      <ActionIndicator
        size="5rem"
        variant="lg"
      />
    </a>
  );
};

export default AdvanceToNextSectionButton;
