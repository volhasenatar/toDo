const body = document.querySelector("body");

//див обертка
const backgroundDivMain = document.createElement("div");
backgroundDivMain.setAttribute("id", "main");
body.append(backgroundDivMain);

//див обертка с белым фоном
const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("todo-list");
backgroundDivMain.append(backgroundDiv);
// див с текстом
const toDoApp = document.createElement("div");
backgroundDiv.appendChild(toDoApp).classList.add("todo-list_text");
const h2 = document.createElement("h2");
toDoApp.appendChild(h2).innerText = "ToDo App";

const inputItems = document.createElement("div");
backgroundDiv.appendChild(inputItems).classList.add("todo-list_items");

//инпут, в который я вношу дела
const toDoInput = document.createElement("input");
inputItems.appendChild(toDoInput).setAttribute("placeholder", "Add your new todo");
toDoInput.setAttribute("id", "guess");
//кнопка с инпутом
const toDoInputBtn = document.createElement("button");
inputItems.appendChild(toDoInputBtn).innerText = "⁤⁤Add";

const divForTasks = document.createElement("div");
backgroundDiv.appendChild(divForTasks).classList.add("todo-list_tasks");

//див с результатом
const toDoSummary = document.createElement("div");
backgroundDiv.appendChild(toDoSummary).classList.add("summary");
// текст результата
const par = document.createElement("p");
toDoSummary.appendChild(par);
par.innerHTML = `You have 0 panding tasks`;

//кнопка очистить все
const btnClearAll = document.createElement("button");
toDoSummary.appendChild(btnClearAll).innerText = "Clear All";


// ДИНАМИКА

const input = document.querySelector("#guess"); //доступ к инпут
input.addEventListener('keypress', inputFn);
function inputFn(e) {
    if (e.keyCode === 13) {
        play();
        summary();
    }
}

toDoInputBtn.addEventListener("click", play);
toDoInputBtn.addEventListener("click", summary);

function play() { 
    var toDoItem = document.createElement("ul");
    divForTasks.appendChild(toDoItem).classList.add("todo-list_item");

    const toDoList = document.createElement("li");
    toDoList.innerText = toDoInput.value
    if (toDoInput.value.length === 0) {
        toDoItem.remove();
    }

    toDoItem.appendChild(toDoList);
    toDoInput.value = '';

    const toDoBtn = document.createElement("button");
    toDoItem.appendChild(toDoBtn).innerText = "Delete";

    toDoBtn.addEventListener('click', deleteTasks);
    btnClearAll.addEventListener('click', deleteTasks);
        
    function deleteTasks() {
        toDoItem.remove();
        toDoBtn.remove();
        summary(); 
    } 
}

function summary(){
    const array = [];
    array[1] = document.querySelector(".todo-list_tasks").children.length;
    par.innerHTML = `You have ${array[1]} panding tasks`;
}