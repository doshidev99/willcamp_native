import * as S from "../actionTypes";

const initialState = [
  { task: "go to school", completed: true },
  { task: "go to office", completed: false },
];

export const taskReducers = (tasks = initialState, action) => {
  switch (action.type) {
    case S.ADD_NEW_TASK: {
      return [
        ...tasks,
        {
          taskId: action.taskId,
          ...action.taskName,
        },
      ];
    }
    default:
      return tasks;
  }
};
