import type { Task, TasksData } from "./todoTypes";

export interface TodoColumnProps {
  title: string;
  category: keyof TasksData;
  items: Task[];
  handleAdd: (category: keyof TasksData, newTask: Task) => void;
  handleDelete: (category: keyof TasksData, id: string) => void;
  handleUpdate: (
    category: keyof TasksData,
    id: string,
    updatedTask: Task
  ) => void;
}
