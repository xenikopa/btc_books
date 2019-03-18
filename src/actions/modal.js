const openModal = (form) => {
  return {
    type: 'OPEN_MODAL',
    form
  }
}
const сloseAndSave = (form) => {
  return {
    type: 'CLOSE_AND_SAVE',
    form
  }
}
const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  }
}

export {
  closeModal, 
  openModal,
  сloseAndSave
}