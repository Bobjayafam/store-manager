const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modal-edit');
const deleteBtns = document.querySelectorAll('.delete');
const editBtns = document.querySelectorAll('.edit');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.querySelector('.cancel');
const viewMorebtns = document.querySelectorAll('.view-more');

const toggleModal = () => {
  modal.classList.toggle('show-modal');
};

const toggleModalEdit = () => {
  modalEdit.classList.toggle('show-modal-edit');
};

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};


deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', toggleModal);
});

viewMorebtns.forEach((viewMoreBtn) => {
  viewMoreBtn.addEventListener('click', toggleModal);
});


editBtns.forEach((editBtn) => {
  editBtn.addEventListener('click', toggleModalEdit);
});

closeBtn.addEventListener('click', toggleModal);
cancelBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
