const initialState = {
  history: []
}

const getHistory = (history, action) => {
  switch (action.type) {
    case 'UPDATE_HISTORY':{
      const historyValues = [
        ...history,
        {
          ...action.book
        }
      ].slice(-5).reverse();
      return historyValues;
    }
    default: 
      return history
  }
}

export default function history(state = initialState, action) {
  return {
    history: getHistory(state.history, action)
  }
}