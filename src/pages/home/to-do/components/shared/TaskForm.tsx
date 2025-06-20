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

type TaskFormData = {
  title: string;
  description: string;
  dateBegin: Date;
  dateFinish: Date;
  important: boolean;
  status: TodoSection;
};
interface Props {
  category: keyof TasksData;
  onAdd: (category: keyof TasksData, newTask: Task) => void;
  onUpdate: (category: keyof TasksData, id: string, title: string) => void;
  onDelete: (category: keyof TasksData, id: string) => void;
}

export const TaskForm = ({ category, onAdd, onUpdate, onDelete }: Props) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    dateBegin: new Date(),
    dateFinish: new Date(),
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
      status: prev.status === statusValue ? "todo" : statusValue, // Desmarca se clicar de novo
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Tarefa criada:", formData);
    // Aqui você pode fazer o POST para o backend ou salvar no estado global
    const test: Task = {
      id: crypto.randomUUID(),
      dateCreation: new Date(),
      ...formData,
    };
    onAdd(formData.status, test);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} maxWidth={400}>
        <TextField
          label="Nome da Tarefa"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <TextField
          label="Descrição"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
        />

        <TextField
          label="Data de Início"
          name="dateBegin"
          type="date"
          value={formData.dateBegin}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />

        <TextField
          label="Data de Término"
          name="dateFinish"
          type="date"
          value={formData.dateFinish}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
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
          control={
            <Checkbox
              checked={formData.important}
              onChange={handleCheckboxChange}
              name="important"
            />
          }
          label="Importante"
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
            onClick={handleClose}
          >
            Create Task
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
