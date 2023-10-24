var input = document.getElementById("myInput");
var button = document.getElementById("addbutton");
var list = document.getElementById("list");

function add() {
    var toDoItem = document.createElement("div");
    var toDoText = input.value;
    var newpElement = document.createElement("p");
    newpElement.classList.add("items-text");
    newpElement.innerText = toDoText;
    var finishButton = document.createElement("button");
    finishButton.innerText = "Finish";
    finishButton.classList.add("finish");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    finishButton.addEventListener("click", function () {
        newpElement.classList.toggle("finished");
    });

    deleteButton.addEventListener("click", function () {
        toDoItem.remove();
    });

    toDoItem.appendChild(newpElement);
    toDoItem.appendChild(finishButton);
    toDoItem.appendChild(deleteButton);
    list.appendChild(toDoItem);
    toDoItem.classList.add("todo");

    input.value = ""; 
}

button.addEventListener("click", add);