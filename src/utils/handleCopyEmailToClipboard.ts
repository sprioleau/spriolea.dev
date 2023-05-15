import toastMessage from "./toastMessage";

export default function handleCopyEmailToClipboard(textToCopy: string) {
  navigator.clipboard.writeText(textToCopy);
  toastMessage("Email address successfully copied!", "email");
}
