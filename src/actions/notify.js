const openNotify= (bookTitle) => {
    return {
      type: 'OPEN_NOTIFY',
      bookTitle
    }
  }
  const closeNotify = (form) => {
    return {
      type: 'CLOSE_NOTIFY',
    }
  }
  
  export {
    closeNotify, openNotify
  }