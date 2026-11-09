
// Question 1: To-Do List

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});


// Question 2: Counter

let count = 0;

let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});


// Question 3: Image Change

let myImage = document.getElementById("myImage");
let changeBtn = document.getElementById("changeBtn");

let imageChanged = false;

changeBtn.addEventListener("click", function() {

    if (imageChanged === false) {
        myImage.src = "images.jpg";
        imageChanged = true;
    } else {
        myImage.src = "images (1).jpg";
        imageChanged = false;
    }

});
