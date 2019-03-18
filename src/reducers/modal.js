import { saveBook } from "../storage/books";

const initialState = {
  form: null,
  isShow: false
}

const getShown = (isShow, action) => {
  switch (action.type) {
    case 'OPEN_MODAL': 
      return true;
    case 'CLOSE_MODAL': 
    case 'CLOSE_AND_SAVE':
      return false;
    default: 
      return isShow
  }
}

const handlerAction = ({type, form}) => {
  switch (type) {
    case 'CLOSE_AND_SAVE': {
      saveBook(form);
      break;
    }
    default: 
      break;
  }
}

export default function modal(state = initialState, action) {
  handlerAction(action);
  return {
    form: action.form,
    isShow: getShown(state.isShow, action)
  }
}