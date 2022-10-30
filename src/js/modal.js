const btnModal = document.querySelectorAll('[data-modal]');
const body = document.body;
const closeModal = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

btnModal.forEach((item) => {
  item.addEventListener('click', function (event) {
    let $this = event.currentTarget;
    let modalId = $this.getAttribute('data-modal');
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector('.modal__content');

    modalContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    modal.classList.add('show');
    body.classList.add('not-scroll');
  });
});

closeModal.forEach(function (item) {
  item.addEventListener('click', function (event) {
    let currentModal = event.currentTarget.closest('.modal')
    closeMo(currentModal);
  });
});

modal.forEach(function (item) {
  item.addEventListener('click', function (event) {
    let currentModal = event.currentTarget;
      closeMo(currentModal);
  });
});

function closeMo(currentModal) {
  currentModal.classList.remove('show');
  body.classList.remove('not-scroll');
};
