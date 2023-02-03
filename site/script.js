// to do list app

const tasks=[];  // list of items will be contained in this array 

// const form = document.getElementById('f1');
// console.log(form);
// form.addEventListener('submit',addTask); 

const addtaskbtn = document.getElementById('addtasksubmitbtn');
addtaskbtn.addEventListener('click',addTask);
// listen to the submit event and add the task

// function add task(task) - adds a task to the list of tasks pushes it to the array and add delete button and checkbox 

function addTask(e) {

e.preventDefault();
let taskadded = document.querySelector('input')

//  the user input is not empty then add the task to the array and add the task to the DOM
    if (taskadded.value!== "") {
        tasks.push(taskadded.value);
        const item = document.createElement("p");
        document.querySelector('div').appendChild(item);

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
        document.querySelector('div').removeChild(li));
    }
    else {
        alert("task was not found");
    }
}



