//создает новый элемент списка (<li>) на основе введенного пользователем текста,
//добавляет к нему кнопку закрытия и позволяет удалять элементы списка.
  function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    const span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "\u00D7";
    li.appendChild(span);

    span.addEventListener("click", function() {
        this.parentElement.remove(); // Удаляет элемент списка
    });
}