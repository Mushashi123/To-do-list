//DOM elements that allows user to create a task
task = document.querySelector('input');
const addBtn = document.querySelector('.add');




// adding task    
// - when user clicks add task 
addBtn.addEventListener('click', () => {

    if (task.value === '') {
        alert('Please provide Task');
        return;
    }
    const taskContainer = createAnElement('div');
    const taskText = createAnElement('p');
    const btnHolder = createAnElement('div');
    const checkBtn = createAnElement('i');
    const deleteBtn = createAnElement('i');



    // creating all the DOM elements required to display the task 

    //adding style to all the above created elements 
    // - to make UI good looking to display tasks 
    taskContainer.classList.add('container', 'container-task');
    taskText.classList.add('task');
    btnHolder.classList.add('btn-holder');
    checkBtn.classList.add('fa-solid', 'fa-check', 'btn', 'check-btn');
    deleteBtn.classList.add('fa-solid', 'fa-trash-can', 'btn', 'delete-btn');



    //writing the dom element with user given task
    taskText.innerText = task.value;

    //appeding the above created elements in strucuture..
    // button holder wrapps two icons 
    btnHolder.appendChild(checkBtn);
    btnHolder.appendChild(deleteBtn);

    //task container wrapps button holder and a <p> ekement that contains the task
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(btnHolder);

    //body wrpas around our task container 
    document.body.appendChild(taskContainer);

    //  feature : task completed and deleted 
    // - ugin event delegation 
    // - instaed of giving event handeler to each of the element i used target element 
    btnHolder.addEventListener('click', (e) => {
        //if check icon is clicke task is done , so we crooss the task
        if (e.target.classList.contains('check-btn')) {
            taskText.style.textDecoration = 'line-through'
        }
        //if delete icon is clicked task is deleted 
        if (e.target.classList.contains('delete-btn')) {
            const currentElement = e.target;
            currentElement.parentElement.parentElement.remove();
        }
    })

    // resetting the input bar to empty string '' every time a task is created
    task.value = "";

});


// a function that creates an element 
function createAnElement(string) {
    return document.createElement(string);
}







