import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ButtonForIcon } from "../../../../components/shared/Buttons/ButtonForIcon/ButtonForIcon";

export default function TodoColumnButtons() {
  return (
    <>
      <ButtonForIcon icon={<NoteAddIcon />} />
      <ButtonForIcon icon={<EditNoteIcon />} />
      <ButtonForIcon icon={<DeleteForeverIcon />} />
    </>
  );
}
