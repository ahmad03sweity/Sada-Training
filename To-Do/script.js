    const inputEle = document.getElementById("new-todo");
    const todosEle = document.getElementById("todos");
    const addItem = () => {
    let value = "";
    value = inputEle.value;
    inputEle.value = "";
    if (value.length > 0) { // validation
    todosEle.innerHTML +=
    `
    <li>
    <input type="checkbox">
    <p>1. ${value}</p>
    <div>
    <button>❌</button>
    <button>⛔</button>
    </div>
    </li>`;
    }
    }