const todoFrom = document.querySelector(".todo-form");
const todoInput = todoFrom.querySelector("input");
const todoList = document.querySelector(".todoList");
let todoArr = [];

const TODO_KEY = "todo";

function saveTodo() {
	localStorage.setItem(TODO_KEY,JSON.stringify(todoArr));
}

function deleteList(e) {
	const li = e.target.parentElement;
	li.remove();
	todoArr = todoArr.filter(item => item.id !== parseInt(li.id));
	saveTodo();
}

function paintingTodo(todoValueObj) {
	const li = document.createElement("li");
	li.id = todoValueObj.id;
	const span = document.createElement("span");
	span.innerText = todoValueObj.text;
	const button = document.createElement("button");

	button.innerText = "x";
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
	button.addEventListener("click", deleteList);
}

function writeList(e) {
	e.preventDefault();
	const todoValue = todoInput.value;
	todoInput.value = "";
	const todoValueObj = {
		text:todoValue,
		id: Date.now(),
	}
	todoArr.push(todoValueObj)
	paintingTodo(todoValueObj);
	saveTodo();
}

todoFrom.addEventListener("submit", writeList);

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo) { 
	const parseTodo = JSON.parse(savedToDo);
	todoArr = parseTodo;
	parseTodo.forEach(paintingTodo);
}

