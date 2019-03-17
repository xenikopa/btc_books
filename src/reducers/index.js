import { getBooks } from "../storage/books";

const initialState = {
  filter: {
    section: 'SHOW_ALL',
    input: ''
  },
  books: getBooks()
}

const visibilityFilter = (
  state = {
    section: 'SHOW_ALL',
    input: ''
  }, 
  action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default function booksApp(state = initialState, action) {
  return {
    filter: visibilityFilter(state.visibilityFilter, action),
    books: state.books
  }
}