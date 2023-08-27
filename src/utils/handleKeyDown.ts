import { KeyboardEvent } from "react";

export default function handleKeyDown(
  event: KeyboardEvent,
  actionFunction: (event: KeyboardEvent) => void
) {
  if (!["Enter", " "].includes(event.key)) return;
  if (event.key === " ") event.preventDefault();
  actionFunction(event);
}
