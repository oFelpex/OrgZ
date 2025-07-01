import type { Task, TasksData } from "../types/todoTypes";

const createTask = (newTask: Task): Task => ({
  id: crypto.randomUUID(),
  title: newTask.title,
  description: newTask.description,
  dateCreation: newTask.dateCreation,
  dateBegin: newTask.dateBegin,
  dateFinish: newTask.dateFinish,
  important: newTask.important,
  category: newTask.category,
});

export const addTask = async (
  tasks: TasksData,
  category: keyof TasksData,
  newTask: Task
): Promise<TasksData> => {
  const CreatedNewTask = createTask(newTask);

  try {
    const response = await fetch(`http://localhost:3000/${category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CreatedNewTask),
    });

    if (!response.ok) throw new Error("Erro ao adicionar tarefa.");

    return {
      ...tasks,
      [category]: [...tasks[category], CreatedNewTask],
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
  updatedTask: Task
): Promise<TasksData> => {
  try {
    const response = await fetch(
      `http://localhost:3000/${category}/${taskId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updatedTask }),
      }
    );

    if (!response.ok) throw new Error("Erro ao atualizar tarefa.");

    return {
      ...tasks,
      [category]: tasks[category].map((task) =>
        task.id === taskId ? { ...task, updatedTask } : task
      ),
    };
  } catch (error) {
    console.error("Erro em updateTask:", error);
    return tasks;
  }
};
