import { Middleware } from "redux";
import { RootState } from "../store";

// -> Кастомный логгер, основанный на каррировании <-
const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("current state: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
  };

export default loggerMiddleware;
