function add() {
  let name = document.getElementById("name").value;

  //chacking if user enters button without putting text then error
  if (name == "") {
    let error = (document.getElementById("error").innerHTML =
      "please enter the Task ToDo cannot be EMPTY !!!");
  }

  //else add list in the queue
  else {
    let todoList = document.getElementById("todoList");
    let li = document.createElement("li");
    li.textContent = name;

    //adding delete anchor at list module
    let remove = document.createElement("a");
    remove.textContent = "DELETE";
    remove.href = "javascript:void(0)";
    remove.className = "remove";

    //append delete anchor
    li.appendChild(remove);

    //append list item
    todoList.appendChild(li);
  }
  //removing text after adding
  document.getElementById("name").value = "";
}

//  delete functionality
let btn = document.querySelector("ul");

btn.addEventListener("click", function (e) {
  let todoList = document.getElementById("todoList");
  let li = e.target.parentNode;
  todoList.removeChild(li);
});
