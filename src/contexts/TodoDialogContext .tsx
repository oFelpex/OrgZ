// context/TodoDialogContext.tsx
import { createContext, useContext, useState } from "react";
import type { Task } from "../types/todoTypes";

type ActionType = "add" | "edit" | "delete";

const TodoDialogContext = createContext<{
  open: boolean;
  dialogTypeToOpen: ActionType;
  taskToEdit: Task | null;
  handleOpen: (dialogType: ActionType, taskToEdit?: Task) => void;
  handleClose: () => void;
} | null>(null);

export const TodoDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [dialogTypeToOpen, setdialogTypeToOpen] = useState<ActionType>("add");
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const handleOpen = (dialogType: ActionType, task?: Task) => {
    setdialogTypeToOpen(dialogType);
    setOpen(true);
    setTaskToEdit(task || null);
    console.log("opa", open, dialogType, taskToEdit);
  };
  const handleClose = () => {
    setOpen(false);
    setTaskToEdit(null);
  };

  return (
    <TodoDialogContext.Provider
      value={{ open, handleOpen, handleClose, dialogTypeToOpen, taskToEdit }}
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
