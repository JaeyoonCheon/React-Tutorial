import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALZE_FORM = "auth/INITIALZE_FORM";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initialzeForm = createAction(INITIALZE_FORM, (form) => form);

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
