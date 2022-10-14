const btnModal = document.querySelectorAll('[data-modal]');
const closeModal = document.querySelectorAll('.popup__close');
const modal = document.querySelectorAll('.popup');

btnModal.forEach((item) => {
  item.addEventListener('click', (event) => {
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
    let currentModal = event.currentTarget.closest('.popup');
    closeMo(currentModal);
  });
});
