const updateHistory = (book) => {
  return {
    type: 'UPDATE_HISTORY',
    book
  }
}

export {
  updateHistory
}