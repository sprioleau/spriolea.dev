import toastMessage from "./toastMessage";

const handleCopyEmailToClipboard = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy);
  toastMessage("Email address successfully copied!", "email");
}

export default handleCopyEmailToClipboard;