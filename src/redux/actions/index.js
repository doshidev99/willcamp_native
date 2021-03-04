import * as S from "../actionTypes";

let newTaskId = 0;

export const addNewTask = (inputTaskName) => {
  return {
    type: S.ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: inputTaskName,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: S.TOGGLE_ONE_TASK,
    taskId,
  };
};

// type is required

export const incrementAction = (step) => {
  return {
    type: S.INCREMENT,
    step: step,
  };
};

export const decrementAction = (step) => {
  return {
    type: S.DECREMENT,
    step: step,
  };
};

export const addMovieAction = (newMovie) => {
  return {
    type: S.FETCH_MOVIE,
    newMovie,
  };
};