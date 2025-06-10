const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "delete";
        li.appendChild(span);
    }
    inputBox.value = "";

    saveTasks();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
        saveTasks();
    }
});

function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();