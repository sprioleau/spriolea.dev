export default function scrollToTop(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  e.preventDefault();
  window?.scrollTo(0, 0);
}
