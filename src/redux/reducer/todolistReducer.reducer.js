import { darkTheme } from '../../Theme/DarkTheme';
import {
  add_task,
  change_theme,
  done_task,
  delete_task,
  update_task,
  edit_task,
} from '../types/type';
import { themeArr } from '../../Theme/ThemeManager';

const initialState = {
  currentTheme: darkTheme,
  tasks: [
    { id: 1, name: 'task 1', done: false },
    { id: 2, name: 'task 2', done: false },
    { id: 3, name: 'task 3', done: true },
    { id: 4, name: 'task 4', done: true },
  ],
  taskEdit: {},
  disabledAddButton: false,
  disabledUpdateButton: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      if (action.newTask.name.trim() === '') {
        return { ...state };
      }
      const existingTask = state.tasks.findIndex(
        (task) => task.name === action.newTask.name
      );
      if (existingTask !== -1) {
        return { ...state };
      }
      const newTaskList = [...state.tasks, action.newTask];
      state.tasks = newTaskList;
      return { ...state };
    }
    case change_theme: {
      const newTheme = themeArr.find((theme) => theme.id === action.themeId);
      if (newTheme) {
        state.currentTheme = { ...newTheme.theme };
      }
      return { ...state };
    }
    case done_task: {
      const newTask = [...state.tasks];
      let taskDoneIndex = newTask.findIndex(
        (task) => task.id === action.taskId
      );
      newTask[taskDoneIndex].done = true;
      return { ...state, tasks: newTask };
    }
    case delete_task: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskId),
      };
    }
    case edit_task: {
      return {
        ...state,
        taskEdit: { ...action.editTask },
        disabledAddButton: true,
        disabledUpdateButton: false,
      };
    }
    case update_task: {
      let newTask = [...state.tasks];
      let taskEditIndex = newTask.findIndex((t) => t.id === state.taskEdit.id);
      console.log(newTask[taskEditIndex] === state.taskEdit);
      if (taskEditIndex !== -1) {
        newTask[taskEditIndex] = {
          ...state.taskEdit,
          name: action.taskName,
          id: Date.now(),
        };
      }
      return {
        ...state,
        tasks: newTask,
        disabledAddButton: false,
        disabledUpdateButton: true,
      };
    }
    default:
      return { ...state };
  }
};
