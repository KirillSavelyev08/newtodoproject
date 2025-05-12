//добавляет обработчик событий click на <ul>, чтобы при клике на <li> добавлять или удалять класс checked
const list = document.querySelector('ul');

list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});