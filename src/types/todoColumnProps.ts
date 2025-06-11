import type { Task, TasksData } from "./todoTypes";

export interface TodoColumnProps {
  title: string;
  category: keyof TasksData;
  items: Task[];
  handleAdd: (category: keyof TasksData, title: string) => void;
  handleDelete: (category: keyof TasksData, id: string) => void;
  handleUpdate: (category: keyof TasksData, id: string, title: string) => void;
}
