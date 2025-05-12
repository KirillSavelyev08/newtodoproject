//добавление крестика к каждому элементу списка
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//обработчик событий для кнопок закрытия
const closeButtons = document.getElementsByClassName("close");
for (let j = 0; j < closeButtons.length; j++) {
  closeButtons[j].addEventListener("click", function() {
    this.parentElement.style.display = "none"; // Скрывает элемент списка
  });
}