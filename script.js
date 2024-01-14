/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */


const enterInput = document.querySelector('#input');
const buyItems = document.querySelector('.items');


enterInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = enterInput.value;
        const newList = document.createElement('div');
        newList.classList.add('list');
        newList.textContent = itemText;

    newList.addEventListener ('click', function () {
        newList.classList.toggle('done');
       });

    if (itemText != '') {
        buyItems.append(newList);
    }
    enterInput.value = '';
    }
});