import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from "../actions/actionType";

const initialState = [
  { task: "go to school", completed: true },
  { task: "go to office", completed: false },
];
export const taskReducers = (tasks = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK: {
      return [
        ...tasks,
        {
          taskId: action.taskId,
          ...action.taskName,
        },
      ];
    }
    case TOGGLE_ONE_TASK: {
      // immutable
      // eslint-disable-next-line no-console
      console.log(action, "action");
      // return tasks.map((task) =>
      //   task.taskId === action.taskId
      //     ? { ...task, completed: !task.completed }
      //     : task
      // );
    }
    default:
      return tasks;
  }
};
