const addButton = document.querySelector(".button");
const todoInput = document.querySelector(".text");
const remove = document.querySelector(".cancel");
// const filter = document.querySelector(".filter");
const taskList = document.querySelector("ul");
const sorted = document.querySelector(".sorted .filter");

let isAscending = true;
function addTask() {
  remove.onclick = function () {
    todoInput.value = "";
  };
  // dragula([document.querySelector("#text-content")]);

  addButton.addEventListener("click", (event) => {
    const todoInputValue = todoInput.value.trim();
    if (todoInputValue !== "") {
      const li = document.createElement("li");
      li.textContent = todoInputValue;

      const deleteButton = document.createElement("i");
      deleteButton.className = "fa-solid delete fa-trash-can";
      deleteButton.style.cursor = "pointer";

      deleteButton.addEventListener("click", (event) => {
        li.remove();
        if (taskList.children.length === 0) {
          taskList.style.display = "none";
        }
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskList.style.display = "block";
      todoInput.value = "";
    } else {
      alert("Task əlavə edilməyib");
    }
    const ulWrapper = document.getElementById("text-content");
    new Sortable(ulWrapper,{
      animation: 360,
      chosenClass: "boxShadow",
      dragClass: "drag",
    });
  });

  sorted.addEventListener("click", (event) => {
    if (taskList.children.length > 0) {
      sorted.classList.toggle("fa-arrow-down-wide-short");
      sorted.classList.toggle("fa-arrow-up-wide-short");
      const listItem = Array.from(taskList.getElementsByTagName("li"));
      listItem.sort((a, b) => {
        return isAscending
          ? a.textContent.localeCompare(b.textContent)
          : b.textContent.localeCompare(a.textContent);
      });
      listItem.forEach((element) => {
        taskList.appendChild(element);
      });
      isAscending = !isAscending;
    }
  });
}

addTask();
