const addButton = document.getElementById('addButton');
const addInput = document.getElementById('itemInput');
const todoList = document.getElementById('todoList');


function changeToComp() {
    this.classList.remove('incomplete');
    this.classList.add('completed');
    this.removeEventListener('click',changeToComp);
    this.addEventListener('click',changeToInComp);
}

function changeToInComp() {
    this.classList.remove('completed');
    this.classList.add('incomplete');
    this.removeEventListener('click',changeToInComp);
    this.addEventListener('click',changeToComp);
}

function removeItem() {
    let parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);
}

function createItemDom(value, status) {
    let listItemMainDiv = document.createElement('div');
    let valueDiv = document.createElement('div')
    let itemSpan = document.createElement('span');
    let incompleteBtn = document.createElement('button');

    valueDiv.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-start', 'w-100', 'px-3');
    valueDiv.classList.add((status === 'incomplete') ? 'incomplete' : 'completed');
    itemSpan.innerText = value;
    if(status === 'incomplete'){
        valueDiv.addEventListener('click', changeToComp);
    }else{
        valueDiv.addEventListener('click', changeToInComp);
    }

    incompleteBtn.className = 'btn btn-danger';
    incompleteBtn.innerText = 'X';
    incompleteBtn.addEventListener('click', removeItem);

    listItemMainDiv.className = 'd-flex flex-row justify-content-between my-3'

    valueDiv.appendChild(itemSpan);
    listItemMainDiv.appendChild(valueDiv);
    listItemMainDiv.appendChild(incompleteBtn);

    return listItemMainDiv;
}

function addToList() {
    if(addInput.value) {
        let item = createItemDom(addInput.value, 'incomplete');
        todoList.appendChild(item);
        addInput.value = '';
    }
}

addButton.addEventListener('click', addToList);
addInput.addEventListener('keyup', (ev => {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        addToList();
    }
}));
