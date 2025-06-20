import { useEffect, useState } from "react";
import { addTask, deleteTask, updateTask } from "../services/taskService";
import type { Task, TasksData } from "../types/todoTypes";

export function useTasks() {
  const [tasks, setTasks] = useState<TasksData>({
    todo: [],
    onGoing: [],
    done: [],
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const [todoRes, onGoingRes, doneRes] = await Promise.all([
          fetch("http://localhost:3000/todo"),
          fetch("http://localhost:3000/onGoing"),
          fetch("http://localhost:3000/done"),
        ]);

        const [todo, onGoing, done] = await Promise.all([
          todoRes.json(),
          onGoingRes.json(),
          doneRes.json(),
        ]);

        setTasks({ todo, onGoing, done });
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleAdd = (category: keyof TasksData, newTask: Task) => {
    addTask(tasks, category, newTask).then(setTasks);
  };

  const handleDelete = (category: keyof TasksData, id: string) => {
    deleteTask(tasks, category, id).then(setTasks);
  };

  const handleUpdate = (
    category: keyof TasksData,
    id: string,
    title: string
  ) => {
    updateTask(tasks, category, id, title).then(setTasks);
  };

  return { tasks, handleAdd, handleDelete, handleUpdate };
}
