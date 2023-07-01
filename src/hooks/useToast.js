import { toast } from "react-hot-toast";

const useToast = () => {
  const toastError = (message) => toast.error(message);
  const toastSuccess = (message) => toast.success(message);

  return { toastError, toastSuccess };
};

export default useToast;
