// Додаємо слухач кліку: метод, що буде виконуватися при кліку на кнопку
// "Додати нагадування"
document.getElementById('addNote').addEventListener('click', () => {
  // Знаходимо тектове поле нагадування
  let noteInput = document.getElementById('noteInput');
  // Беремо введене значення
  let newNoteText = noteInput.value;

  // Якщо значення є - додаємо новий елемент до списку
  if (newNoteText) {
    // Створюємо елемент
    let newNoteElement = document.createElement('li');
    // Встановлюємо його контент рівним значенню з текстового поля
    newNoteElement.textContent = newNoteText;

    // Додаємо створений елемент до списку
    document.getElementById('notesList').appendChild(newNoteElement);
    // Вичищаємо непотрібне значення з текстового поля
    noteInput.value = '';
  }
})

// Завантажуємо з сервера файл і додаємо його зміст до списку
document.getElementById('loadNotes').addEventListener('click', () => {
  const request = new XMLHttpRequest();
  request.onload = function () {
    document.getElementById('notesList').innerHTML = this.responseText;
    console.log('Onload request. ' + this.responseText);
  }

  request.open('GET', '_items.html', true);
  request.send();
})
