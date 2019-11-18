import { USER_LOGIN, USER_REGISTER, SHOW_ALERT,IS_LOADING, VALIDATION, HIDDEN_ALERT } from "../Types";

const initialstate = {
  dataLogin: [],
  isLoading: false,
  validation: "",
  showAlert:false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        dataLogin: action.payload,
        isLoading: false
      };

    case USER_REGISTER:
      return {
        isLoading: false 
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case VALIDATION:
      return {
        ...state,
        validation: action.payload
      };

      case  SHOW_ALERT: 
      return{
        ...state,
        showAlert:true
      }
      case HIDDEN_ALERT :
        return{
          ...state,
          showAlert:false
        }

    default:
      return state;
  }
};
