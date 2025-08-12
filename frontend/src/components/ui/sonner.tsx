// components/Toaster.tsx
import { Toaster as Sonner } from "sonner";

export const Toaster = () => {
  return (
    <Sonner
      position="top-right"
      richColors
      theme="light" // yoki "dark"
    />
  );
};
export default Toaster;