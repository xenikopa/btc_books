const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
const updateBooks = () => {
  return {
    type: 'UPDATE_BOOKS'
  }
}

export {
  setVisibilityFilter,
  updateBooks
}