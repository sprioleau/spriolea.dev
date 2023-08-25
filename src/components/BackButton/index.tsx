import Link from "next/link";
import icons from "../Icons";

type Props = {
  title: string;
  to?: `/${string}`;
};

export default function index({ to = "/", title }: Props) {
  return (
    <Link
      href={to}
      className="back-button"
    >
      <span className="back-button__icon">{icons.arrowLeft}</span>
      {title}
    </Link>
  );
}
