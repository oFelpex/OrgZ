import { useState, type ChangeEvent, type FormEvent, useCallback } from "react";
import { Stack } from "@mui/material";
import type {
  Task,
  TasksData,
  TodoSection,
} from "../../../../../../types/todoTypes";
import dayjs, { Dayjs } from "dayjs";

// Subcomponents
import { TitleInput } from "./TaskFormComponents/TitleInput";
import { DescriptionInput } from "./TaskFormComponents/DescriptionInput";
import { DatePickers } from "./TaskFormComponents/DatePickers";
import { StatusCheckboxes } from "./TaskFormComponents/StatusCheckboxes";
import { ImportantCheckbox } from "./TaskFormComponents/ImportantCheckbox";
import { FormButtons } from "./TaskFormComponents/FormButtons";
import { useTodoDialogs } from "../../../../../../contexts/TodoDialogContext ";
import type { ActionType } from "../../TodoTaskDialogs";

type TaskFormData = {
  title: string;
  description: string;
  dateBegin: Dayjs | null;
  dateFinish: Dayjs | null;
  important: boolean;
  status: TodoSection;
};

interface Props {
  category: keyof TasksData;
  onAdd: (category: keyof TasksData, newTask: Task) => void;
  onUpdate: (category: keyof TasksData, id: string, newTask: Task) => void;
  onDelete: (category: keyof TasksData, id: string) => void;
  dialogTypeToOpen: ActionType;
}

export const TaskForm = ({
  dialogTypeToOpen,
  category,
  onAdd,
  onUpdate,
  onDelete,
}: Props) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    dateBegin: dayjs(),
    dateFinish: dayjs().add(1, "day"),
    important: false,
    status: category,
  });

  const { handleClose } = useTodoDialogs();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleDateChange = useCallback(
    (field: "dateBegin" | "dateFinish", value: Dayjs | null) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    },
    []
  );

  const handleStatusChange = useCallback((statusValue: TodoSection) => {
    setFormData((prev) => ({
      ...prev,
      status: prev.status === statusValue ? "todo" : statusValue,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const task: Task = {
        id: crypto.randomUUID(),
        dateCreation: new Date(),
        ...formData,
        dateBegin: formData.dateBegin
          ? formData.dateBegin.toDate()
          : new Date(),
        dateFinish: formData.dateFinish
          ? formData.dateFinish.toDate()
          : new Date(),
      };
      switch (dialogTypeToOpen) {
        case "add":
          onAdd(formData.status, task);
          break;
        case "edit":
          onUpdate(formData.status, task.id, task);
          break;
        case "delete":
          onDelete(formData.status, task.id);
          break;
      }

      handleClose();
    },
    [formData, dialogTypeToOpen, handleClose, onAdd, onUpdate, onDelete]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} maxWidth={400} padding={1}>
        <TitleInput value={formData.title} onChange={handleChange} />
        <DescriptionInput
          value={formData.description}
          onChange={handleChange}
        />
        <DatePickers
          dateBegin={formData.dateBegin}
          dateFinish={formData.dateFinish}
          onDateChange={handleDateChange}
        />
        <StatusCheckboxes
          status={formData.status}
          onStatusChange={handleStatusChange}
        />
        <ImportantCheckbox
          checked={formData.important}
          onChange={handleCheckboxChange}
        />
        <FormButtons onCancel={handleClose} />
      </Stack>
    </form>
  );
};
