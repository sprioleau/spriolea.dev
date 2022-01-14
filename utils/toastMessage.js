import { toast } from "react-toastify";

const toastMessage = (message, id = null) => toast.dark(message, { toastId: id });

export default toastMessage;