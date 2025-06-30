import { useTodoDialogs } from "../../../../contexts/TodoDialogContext ";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ButtonForIcon } from "../../../../components/shared/Buttons/ButtonForIcon/ButtonForIcon";
import type { Task, TasksData } from "../../../../types/todoTypes";
import TodoTaskDialogs from "./TodoTaskDialogs";

interface Props {
  category: keyof TasksData;
  handleAdd: (category: keyof TasksData, newTask: Task) => void;
  handleUpdate: (
    category: keyof TasksData,
    id: string,
    updatedTask: Task
  ) => void;
  handleDelete: (category: keyof TasksData, id: string) => void;
}

export default function TodoColumnButtons({
  category,
  handleAdd,
  handleUpdate,
  handleDelete,
}: Props) {
  const { handleOpen } = useTodoDialogs();

  const handleAddClick = () => {
    handleOpen("add");
  };

  const handleEditClick = () => {
    handleOpen("edit");
  };

  const handleDeleteClick = () => {
    handleOpen("delete");
    const id = prompt("ID da tarefa a deletar:");
    if (id) handleDelete(category, id);
  };
  console.log("AQUIIIIIIIIII");

  return (
    <>
      <ButtonForIcon icon={<NoteAddIcon />} onClick={handleAddClick} />
      <ButtonForIcon icon={<EditNoteIcon />} onClick={handleEditClick} />
      <ButtonForIcon icon={<DeleteForeverIcon />} onClick={handleDeleteClick} />

      {/* MOVER ISSO AQUI */}
      <TodoTaskDialogs
        category={category}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}
