import { useTodoDialogs } from "../../../../contexts/TodoDialogContext ";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ButtonForIcon } from "../../../../components/shared/Buttons/ButtonForIcon/ButtonForIcon";
import type { Task, TasksData } from "../../../../types/todoTypes";
import TodoTaskDialogs from "./TodoTaskDialogs";

interface Props {
  category: keyof TasksData;
  onAdd: (category: keyof TasksData, newTask: Task) => void;
  onUpdate: (category: keyof TasksData, id: string, title: string) => void;
  onDelete: (category: keyof TasksData, id: string) => void;
}

export default function TodoColumnButtons({
  category,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  const { handleOpen } = useTodoDialogs();

  const handleAddClick = () => {
    handleOpen("add");
  };

  const handleEditClick = () => {
    handleOpen("edit");
    const id = prompt("ID da tarefa a editar:");
    const newTitle = prompt("Novo título:");
    if (id && newTitle) onUpdate(category, id, newTitle);
  };

  const handleDeleteClick = () => {
    handleOpen("delete");
    const id = prompt("ID da tarefa a deletar:");
    if (id) onDelete(category, id);
  };

  return (
    <>
      <ButtonForIcon icon={<NoteAddIcon />} onClick={handleAddClick} />
      <ButtonForIcon icon={<EditNoteIcon />} onClick={handleEditClick} />
      <ButtonForIcon icon={<DeleteForeverIcon />} onClick={handleDeleteClick} />
      <TodoTaskDialogs
        category={category}
        onAdd={onAdd}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </>
  );
}
