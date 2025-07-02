import {
  useState,
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useEffect,
} from "react";
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
  category: TodoSection;
};

interface Props {
  taskToEdit: Task | null;
  handleAdd: (category: keyof TasksData, newTask: Task) => void;
  handleUpdate: (category: keyof TasksData, id: string, newTask: Task) => void;
  handleDelete: (category: keyof TasksData, id: string) => void;
  dialogTypeToOpen: ActionType;
}

export const TaskForm = ({
  dialogTypeToOpen,
  taskToEdit,
  handleAdd,
  handleUpdate,
  handleDelete,
}: Props) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    dateBegin: dayjs(),
    dateFinish: dayjs().add(1, "day"),
    important: false,
    category: "todo",
  });

  useEffect(() => {
    if (dialogTypeToOpen === "edit" && taskToEdit) {
      setFormData({
        title: taskToEdit.title,
        description: taskToEdit.description,
        dateBegin: dayjs(taskToEdit.dateBegin),
        dateFinish: dayjs(taskToEdit.dateFinish),
        important: taskToEdit.important,
        category: taskToEdit.category,
      });
    }

    if (dialogTypeToOpen === "add") {
      setFormData({
        title: "",
        description: "",
        dateBegin: dayjs(),
        dateFinish: dayjs().add(1, "day"),
        important: false,
        category: "todo",
      });
    }
  }, [dialogTypeToOpen, taskToEdit, taskToEdit?.category]);

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
      category: prev.category === statusValue ? "todo" : statusValue,
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
          handleAdd(formData.category, task);
          break;
        case "edit":
          handleUpdate(formData.category, task.id, task);
          break;
        case "delete":
          handleDelete(formData.category, task.id);
          break;
      }

      handleClose();
    },
    [
      formData,
      dialogTypeToOpen,
      handleClose,
      handleAdd,
      handleUpdate,
      handleDelete,
    ]
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
          status={formData.category}
          onStatusChange={handleStatusChange}
        />
        <ImportantCheckbox
          checked={formData.important}
          onChange={handleCheckboxChange}
        />
        <FormButtons
          dialogTypeToOpen={dialogTypeToOpen}
          onCancel={handleClose}
        />
      </Stack>
    </form>
  );
};
