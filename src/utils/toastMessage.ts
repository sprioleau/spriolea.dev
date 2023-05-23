import { Id, toast } from "react-toastify";

export default function toastMessage(message: string, id?: Id) {
  console.log("🍞🍞🍞");
  toast.dark(message, { toastId: id });
}
