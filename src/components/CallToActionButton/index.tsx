import { CallToAction } from "@/schemas/types";

type Props = {
  cta: CallToAction;
  className: string;
};

export default function CallToActionButton({ cta, className }: Props) {
  return (
    <a
      href={`#${cta.linkTarget}`}
      className={`${className} button`}
    >
      {cta.label}
    </a>
  );
}
