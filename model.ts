/** The only valid states a task can have. */
export type TaskStatus = "todo" | "in-progress" | "done";

/** The complete data shape for a task. */
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

/**
 * Returns a new array with a new task appended.
 * The new task receives the first available positive integer ID.
 */
export function addTask(tasks: Task[], title: string): Task[] {
  let id = 1;

  while (tasks.some((task) => task.id === id)) {
    id += 1;
  }

  const newTask: Task = {
    id,
    title,
    status: "todo",
  };

  return [...tasks, newTask];
}

/** Returns a new array with the matching task marked as done. */
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task,
  );
}

/** Returns a new array containing only tasks with the requested status. */
export function filterByStatus(
  tasks: Task[],
  status: TaskStatus,
): Task[] {
  return tasks.filter((task) => task.status === status);
}

/**
 * Extra operation: advances a task from todo to in-progress to done.
 * A task already marked done stays done.
 */
export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    const nextStatus: TaskStatus =
      task.status === "todo"
        ? "in-progress"
        : task.status === "in-progress"
          ? "done"
          : "done";

    return { ...task, status: nextStatus };
  });
}
