// context/TodoDialogContext.tsx
import { createContext, useContext, useState } from "react";

type ActionType = "add" | "edit" | "delete";

const TodoDialogContext = createContext<{
  open: boolean;
  handleOpen: (dialogType: ActionType) => void;
  dialogTypeToOpen: ActionType;
  handleClose: () => void;
} | null>(null);

export const TodoDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [dialogTypeToOpen, setdialogTypeToOpen] = useState<ActionType>("add");

  const handleOpen = (dialogType: ActionType) => {
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
