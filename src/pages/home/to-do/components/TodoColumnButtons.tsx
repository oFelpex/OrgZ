import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ButtonForIcon } from "../../../../components/shared/Buttons/ButtonForIcon/ButtonForIcon";
import type { TasksData } from "../../../../types/todoTypes";

interface Props {
  category: keyof TasksData;
  onAdd: (category: keyof TasksData, title: string) => void;
  onUpdate: (category: keyof TasksData, id: string, title: string) => void;
  onDelete: (category: keyof TasksData, id: string) => void;
}

export default function TodoColumnButtons({
  category,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  const handleAddClick = () => {
    const title = prompt("Título da nova tarefa:");
    if (title) onAdd(category, title);
  };

  const handleEditClick = () => {
    const id = prompt("ID da tarefa a editar:");
    const newTitle = prompt("Novo título:");
    if (id && newTitle) onUpdate(category, id, newTitle);
  };

  const handleDeleteClick = () => {
    const id = prompt("ID da tarefa a deletar:");
    if (id) onDelete(category, id);
  };

  return (
    <>
      <ButtonForIcon icon={<NoteAddIcon />} onClick={handleAddClick} />
      <ButtonForIcon icon={<EditNoteIcon />} onClick={handleEditClick} />
      <ButtonForIcon icon={<DeleteForeverIcon />} onClick={handleDeleteClick} />
    </>
  );
}
