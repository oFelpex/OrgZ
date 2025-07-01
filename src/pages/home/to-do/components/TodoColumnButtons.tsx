import { useTodoDialogs } from "../../../../contexts/TodoDialogContext ";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ButtonForIcon } from "../../../../components/shared/Buttons/ButtonForIcon/ButtonForIcon";
import type { Task, TasksData } from "../../../../types/todoTypes";
import TodoTaskDialogs from "./TodoTaskDialogs";

interface Props {
  handleAdd: (category: keyof TasksData, newTask: Task) => void;
  handleUpdate: (
    category: keyof TasksData,
    id: string,
    updatedTask: Task
  ) => void;
  handleDelete: (category: keyof TasksData, id: string) => void;
}

export default function TodoColumnButtons({
  handleAdd,
  handleUpdate,
  handleDelete,
}: Props) {
  const { handleOpen } = useTodoDialogs();

  const handleAddClick = () => {
    handleOpen("add");
  };

  const handleDeleteClick = () => {
    handleOpen("delete");
    // const id = prompt("ID da tarefa a deletar:");
    // if (id) handleDelete(id);
  };

  return (
    <>
      <ButtonForIcon icon={<NoteAddIcon />} onClick={handleAddClick} />
      <ButtonForIcon icon={<DeleteForeverIcon />} onClick={handleDeleteClick} />

      {/* MOVER ISSO AQUI */}
      <TodoTaskDialogs
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}
