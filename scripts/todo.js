const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

let todos = [];

function paintTodo(newTodo){
    let str = `
                <li id="${newTodo.id}">
                    <input type="checkbox">
                    <input class="${newTodo.id}" value="${newTodo.text}" readonly="true"/>
                    <button class="edit">
                        <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                    </button>
                    <button class="del">
                        <svg version="1.1" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Core" transform="translate(-299.000000, -129.000000)"><g id="delete" transform="translate(299.000000, 129.000000)"><path d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z" id="Shape"/></g></g></g></svg>
                    </button>
                </li>
            `;
    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', str);

    // edit
    document.querySelectorAll('.edit').forEach((edit, idx) => {
        const prevSb = edit.previousElementSibling;

        edit.addEventListener('click', () => {
            prevSb.readOnly = false;
            prevSb.focus();
        })
        prevSb.addEventListener('blur', () => {
            prevSb.readOnly = true;
            todos[idx].text = prevSb.value;
            saveTodos();
        })
    })

    // delete
    document.querySelectorAll('.del').forEach(del => {
        del.addEventListener("click", () => {
            const li = del.parentElement;
            li.remove();
            todos = todos.filter((todo) => todo.id !== parseInt(li.id));
            saveTodos();
        })
    });
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


todoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}