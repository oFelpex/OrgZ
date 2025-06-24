import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTodoDialogs } from "../../../../contexts/TodoDialogContext ";
import { TaskForm } from "./shared/TaskForm/TaskForm";
import type { Task, TasksData } from "../../../../types/todoTypes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type ActionType = "add" | "edit" | "delete";
interface Props {
  category: keyof TasksData;
  onAdd: (category: keyof TasksData, newTask: Task) => void;
  onUpdate: (category: keyof TasksData, id: string, title: string) => void;
  onDelete: (category: keyof TasksData, id: string) => void;
}
export default function TodoTaskDialogs({
  category,
  onAdd,
}: // onUpdate,
// onDelete,
Props) {
  const fullScreen: boolean = useMediaQuery("(min-width:600px)");
  const { open, dialogTypeToOpen, handleClose } = useTodoDialogs();

  const actionTitles: Record<ActionType, string> = {
    add: "Create a new task",
    edit: "Edit your tasks",
    delete: "Delete your task",
  };
  const title = actionTitles[dialogTypeToOpen];

  return (
    <Dialog
      fullScreen={!fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TaskForm
            category={category}
            onAdd={onAdd}
            // onDelete={onDelete}
            // onUpdate={onUpdate}
          />
        </LocalizationProvider>
      </DialogContent>
    </Dialog>
  );
}
