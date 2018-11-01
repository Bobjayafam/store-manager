const modal = document.querySelector('.modal');
const deleteBtns = document.querySelectorAll('.delete');
const editBtns = document.querySelectorAll('.edit');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.querySelector('.cancel');

const toggleModal = () => {
  modal.classList.toggle('show-modal');
};

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};


deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', toggleModal);
});

editBtns.forEach((editBtn) => {
  editBtn.addEventListener('click', toggleModal);
});

closeBtn.addEventListener('click', toggleModal);
cancelBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
