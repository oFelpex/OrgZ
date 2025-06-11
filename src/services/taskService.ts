import type { Task, TasksData } from "../types/todoTypes";

const createTask = (title: string): Task => ({
  id: crypto.randomUUID(),
  title,
  dateCreation: new Date(),
  dateBegin: new Date(),
  dateFinish: new Date(),
  done: false,
});

export const addTask = async (
  tasks: TasksData,
  category: keyof TasksData,
  title: string
): Promise<TasksData> => {
  const newTask = createTask(title);

  try {
    const response = await fetch(`http://localhost:3000/${category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (!response.ok) throw new Error("Erro ao adicionar tarefa.");

    return {
      ...tasks,
      [category]: [...tasks[category], newTask],
    };
  } catch (error) {
    console.error("Erro em addTask:", error);
    return tasks;
  }
};

export const deleteTask = async (
  tasks: TasksData,
  category: keyof TasksData,
  taskId: string
): Promise<TasksData> => {
  try {
    const response = await fetch(
      `http://localhost:3000/${category}/${taskId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Erro ao deletar tarefa.");

    return {
      ...tasks,
      [category]: tasks[category].filter((task) => task.id !== taskId),
    };
  } catch (error) {
    console.error("Erro em deleteTask:", error);
    return tasks;
  }
};

export const updateTask = async (
  tasks: TasksData,
  category: keyof TasksData,
  taskId: string,
  newTitle: string
): Promise<TasksData> => {
  try {
    const response = await fetch(
      `http://localhost:3000/${category}/${taskId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      }
    );

    if (!response.ok) throw new Error("Erro ao atualizar tarefa.");

    return {
      ...tasks,
      [category]: tasks[category].map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      ),
    };
  } catch (error) {
    console.error("Erro em updateTask:", error);
    return tasks;
  }
};
