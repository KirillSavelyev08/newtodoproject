//добавление функциональности кнопкам закрытия
const closeButtons = document.getElementsByClassName("close");

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    this.parentElement.style.display = "none"; // Скрывает родительский элемент
  });
}