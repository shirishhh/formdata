import { FormActionType } from "../actions/formaction";

const formState = {
  isSuccess: "",
  formData: {
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Gender: "",
    TermsAndConditions: "",
  },
};

export const addFormReducer = (state = formState, action) => {
  switch (action.type) {
    case FormActionType.ADDFORMSUCCESS:
      const successFormState = {
        isSuccess: true,
        formData: formState
      };
      return successFormState;
    case FormActionType.ADDFORMFAIL:
      const failFormState = {
        isSuccess: false,
        formData: action.payload,
      };
      return failFormState;
    default:
      return state;
  }
};
