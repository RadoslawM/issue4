let store = JSON.parse(localStorage.getItem('tasks')) || [];



function render() {
    let result = store
        .map((task, index) => {
            return `<li>${task} <button data-id="${index}">Usun</button></li>`
        }).join('');
    document.querySelector('ul').innerHTML = result;

}

render();
document.querySelector('ul').addEventListener('click', e => {

    if (e.target.tagName === 'BUTTON') {
        let index = +e.target.dataset.id;
        store.splice(index, 1);
        render();
        localStorage.setItem('tasks', JSON.stringify(store));

    }
});
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const taskNode = document.querySelector('input[name="task"]');
    const task = taskNode.value.trim();
    taskNode.value = '';
    if (task !== '') {
        store.push(task);
        render();
        localStorage.setItem('tasks', JSON.stringify(store));
    }
});
