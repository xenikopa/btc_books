const initialState = {
  bookTitle: null,
  isShow: false
}

const getShown = (isShow, action) => {
  switch (action.type) {
    case 'OPEN_NOTIFY': 
      return true;
    case 'CLOSE_NOTIFY': 
      return false;
    default: 
      return isShow
  }
}


export default function notify(state = initialState, action) {
  return {
    bookTitle: action.bookTitle,
    isShow: getShown(state.isShow, action)
  }
}