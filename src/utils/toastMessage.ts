import { Id, toast } from "react-toastify";

export default function toastMessage(message: string, id?: Id) {
  toast.dark(message, { toastId: id });
}
