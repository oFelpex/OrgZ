import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  Box,
  IconButton,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useTodoDialogs } from "../../../../../contexts/TodoDialogContext ";
import type {
  Task,
  TasksData,
  TodoSection,
} from "../../../../../types/todoTypes";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
  onUpdate: (category: keyof TasksData, id: string, title: string) => void;
  onDelete: (category: keyof TasksData, id: string) => void;
}

export const TaskForm = ({ category, onAdd }: Props) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    dateBegin: dayjs(),
    dateFinish: dayjs().add(1, "day"),
    important: false,
    status: category,
  });
  const { handleClose } = useTodoDialogs();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (
    field: "dateBegin" | "dateFinish",
    value: Dayjs | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleStatusChange = (statusValue: TodoSection) => {
    setFormData((prev) => ({
      ...prev,
      status: prev.status === statusValue ? "todo" : statusValue,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const task: Task = {
      id: crypto.randomUUID(),
      dateCreation: new Date(),
      ...formData,
      dateBegin: formData.dateBegin ? formData.dateBegin.toDate() : new Date(),
      dateFinish: formData.dateFinish
        ? formData.dateFinish.toDate()
        : new Date(),
    };
    onAdd(formData.status, task);

    console.log("Tarefa criada:", task);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} maxWidth={400} padding={1}>
        <TextField
          label="Task Name"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline // change in the future
          rows={3}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            name="dateBegin"
            value={formData.dateBegin}
            onChange={(newValue) => handleDateChange("dateBegin", newValue)}
          />

          <DatePicker
            label="Finish Date"
            name="dateFinish"
            defaultValue={formData.dateFinish}
            value={formData.dateFinish}
            onChange={(newValue) => handleDateChange("dateFinish", newValue)}
          />
        </LocalizationProvider>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.status === "todo"}
                onChange={() => handleStatusChange("todo")}
              />
            }
            label="To Do"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.status === "onGoing"}
                onChange={() => handleStatusChange("onGoing")}
              />
            }
            label="On Going"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.status === "done"}
                onChange={() => handleStatusChange("done")}
              />
            }
            label="Done"
          />
        </Box>

        <FormControlLabel
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          control={
            <Checkbox
              checked={formData.important}
              onChange={handleCheckboxChange}
              name="important"
            />
          }
          label="Important"
        />

        <Box display="flex" justifyContent="left">
          <IconButton onClick={handleClose}>
            <ArrowBackIcon />
          </IconButton>

          <Button
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Create Task
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
