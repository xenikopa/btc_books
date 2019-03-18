import { getBooks }  from "../storage/books";

const initialState = {
  filter: {
    section: 'SHOW_ALL',
    input: ''
  },
  books: getBooks()
}

const visibilityFilter = (state, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const books = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BOOKS': {
      return getBooks();
    }
    default: 
      return state.books;
  }
}

export default function booksApp(state = initialState, action) {
  return {
    filter: visibilityFilter(state.filter, action),
    books: books(state, action)
  }
}