// to do list app

let tasks=[];  // list of items will be contained in this array 

let completedtasks=[]; // list of completed tasks will be contained in this array
console.log(tasks);

const addtaskbtn = document.getElementById('addtasksubmitbtn');
addtaskbtn.addEventListener('click',addTask);
// listen to the submit event and add the task

// function add task(task) - adds a task to the list of tasks pushes it to the array and add delete button and checkbox 

function addTask(e) {

e.preventDefault();
let taskadded = document.getElementById('task')

//  the user input is not empty then add the task to the array and add the task to the DOM
    let taskvalue = taskadded.value;
    if (taskadded.value!== "") {
        tasks.push(taskadded.value);
        const item = document.createElement("p");
        document.getElementById('listTasks').appendChild(item);

        // adds a check box to the task on the left side
        const tick = document.createElement("input");
        tick.setAttribute("type", "checkbox")
        tick.setAttribute("class", "tick")
        item.appendChild(tick);

        // when the checkbox is clicked the span text will be striked
        tick.addEventListener("click", () => {
            if (tick.checked) {
                span.style.textDecoration = "line-through";
            }
            else {
                span.style.textDecoration = "none";
            }
        })  

        // the task the user enters is added to the dom 

        const span = document.createElement("span");
        span.textContent = taskadded.value;
        item.appendChild(span);

        // adds a delete button to the task on the right side

        const del = document.createElement("button");
        del.setAttribute("class", "del")
        del.setAttribute("id", "del")
        del.textContent = "-";
        item.appendChild(del);
        
        // when the delete button is clicked the task is deleted from the dom

        del.addEventListener("click", () =>
        document.getElementById('listTasks').removeChild(item));
    }
    else {
        alert("task was not found");
    }
}

console.log(tasks)

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}
// code to creat a new sheet of tasks 

