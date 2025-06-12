// context/TodoDialogContext.tsx
import { createContext, useContext, useState } from "react";

const TodoDialogContext = createContext<{
  open: boolean;
  handleOpen: (dialogType: string) => void;
  dialogTypeToOpen: string;
  handleClose: () => void;
} | null>(null);

export const TodoDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [dialogTypeToOpen, setdialogTypeToOpen] = useState("add");

  const handleOpen = (dialogType: string) => {
    console.log("opa", open, dialogType);
    setdialogTypeToOpen(dialogType);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <TodoDialogContext.Provider
      value={{ open, handleOpen, handleClose, dialogTypeToOpen }}
    >
      {children}
    </TodoDialogContext.Provider>
  );
};

export const useTodoDialogs = () => {
  const context = useContext(TodoDialogContext);
  if (!context)
    throw new Error("useTodoDialogs must be used within a TodoDialogProvider");
  return context;
};
