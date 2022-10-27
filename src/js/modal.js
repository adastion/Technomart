const btnModal = document.querySelectorAll('[data-modal]');
const closeModal = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

btnModal.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let $this = event.currentTarget;
    let modalId = $this.getAttribute('data-modal');
    let modalWin = document.getElementById(modalId);

    modalWin.classList.add('show');
  });
});

function closeMo(currentModal) {
  currentModal.classList.remove('show');
}

closeModal.forEach((item) => {
  item.addEventListener('click', (event) => {
    let currentModal = event.currentTarget.closest('.modal');
    closeMo(currentModal);
  });
});
