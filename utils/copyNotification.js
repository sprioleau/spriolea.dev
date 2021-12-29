import { toast } from "react-toastify";

const copyNotification = () => toast.dark("Email address successfully copied!", { toastId: "email" });

export default copyNotification;