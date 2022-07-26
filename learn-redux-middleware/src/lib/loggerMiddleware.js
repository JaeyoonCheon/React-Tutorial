const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  console.group(action && action.tyoe);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음 상태", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;