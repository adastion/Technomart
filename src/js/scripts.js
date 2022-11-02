const addBookmarks = (btnSelector, counter) => {
    const btn = document.querySelectorAll(btnSelector);
    const quantity = document.getElementById(counter);

    btn.forEach((item) => {
      item.addEventListener('click', function (event) {
        let $this = event.currentTarget;
        let counterId = $this.getAttribute('data-bookmarks');
        let outResult = document.getElementById(counterId);

        outResult.textContent = outResult++;
      });
    });
}
