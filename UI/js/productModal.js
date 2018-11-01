const modal = document.querySelector('.modal');
const deleteBtn = document.querySelector('.delete');
const editBtn = document.querySelector('.edit');
const closeButton = document.querySelector('.close');

const toggleModal = () => {
  modal.classList.toggle('show-modal');
};

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

deleteBtn.addEventListener('click', toggleModal);
editBtn.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
