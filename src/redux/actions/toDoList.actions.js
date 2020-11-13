import {
  add_task,
  change_theme,
  done_task,
  delete_task,
  update_task,
  edit_task,
} from '../types/type';

export const addTask = (newTask) => ({
  type: add_task,
  newTask,
});

export const changeTheme = (themeId) => ({
  type: change_theme,
  themeId,
});

export const doneTask = (taskId) => ({ type: done_task, taskId });

export const deleteTask = (taskId) => ({ type: delete_task, taskId });

export const updateTask = (taskName) => ({
  type: update_task,
  taskName,
});

export const editTask = (editTask) => ({ type: edit_task, editTask });
