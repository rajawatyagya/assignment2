const addButton = document.getElementById('addButton');
const addInput = document.getElementById('itemInput');
const todoList = document.getElementById('todoList');
// const todoArray = [];


// function changeListArray(value, status) {
//     for(let i=0; i < todoArray.length; i++){
//
//         if(todoArray[i].content === value){
//             todoArray[i].status = status;
//             break;
//         }
//     }
// }

function changeToComp() {
    this.classList.remove('incomplete');
    this.classList.add('completed');
    this.removeEventListener('click',changeToComp);
    this.addEventListener('click',changeToInComp);
    // changeListArray(this.firstChild.innerText,'complete');
}

function changeToInComp() {
    this.classList.remove('completed');
    this.classList.add('incomplete');
    this.removeEventListener('click',changeToInComp);
    this.addEventListener('click',changeToComp);
    // changeListArray(this.firstChild.innerText,'incomplete');
}

function removeItem() {
    let parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);

    // let data = this.parentElement.firstChild.firstChild.innerText;
    // for(let i=0; i < todoArray.length; i++){
    //
    //     if(todoArray[i].content === data){
    //         todoArray.splice(i,1);
    //         break;
    //     }
    // }
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
    // Not needed as No storage used.
    // let newItem = {
    //     content: addInput.value,
    //     status: 'incomplete'
    // }
    // todoArray.push(newItem);

    let item = createItemDom(addInput.value, 'incomplete');
    todoList.appendChild(item);
    addInput.value = '';
}

addButton.addEventListener('click', addToList);
