import { tasks } from "./task";

export const resolvers = {
  Query: {
    tasks() {
      return tasks;
    },
    createTask(
      _: any,
      { title, description }: { title: string; description: string },
    ) {
      const newTask = {
        id: (tasks.length + 1).toString(),
        title,
        description,
        isCompleted: false,
      };
      tasks.push(newTask);
      return newTask;
    },

    updateTask(
      _: any,
      {
        id,
        title,
        description,
      }: { id: string; title: string; description: string },
    ) {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) {
        throw new Error("Task not found");
      }
      tasks[taskIndex] = { ...tasks[taskIndex], title, description };
      return tasks[taskIndex];
    },

    deleteTask(_: any, { id }: { id: string }) {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) {
        throw new Error("Task not found");
      }
      const deletedTask = tasks[taskIndex];
      tasks.splice(taskIndex, 1);
      return deletedTask;
    },
  },
};
