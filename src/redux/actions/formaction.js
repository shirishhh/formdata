import axios from "axios";

export const FormActionType = {
  ADDFORMSUCCESS: "ADD_FORM_SUCCESS",
  ADDFORMFAIL: "ADD_FORM_FAIL",
};
const header = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
};

export const addFormAction = (formValues) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
      "https://hookb.in/eKx96gxqgQFeYYRdXNLn",
        formValues,
        {header}
      );
      const { data } = res;
      dispatch({
        type: FormActionType.ADDFORMSUCCESS,
        payload: data,

      });
    } catch (error) {
      dispatch({
        type: FormActionType.ADDFORMFAIL,
        payload: {},
      });
    }
  };
};
