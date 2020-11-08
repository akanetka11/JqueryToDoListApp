$(document).ready(function () {
  // Вывод элементов
  function displayToDolistItems(list) {
    let allListItems = "";
    list.forEach((itemList) => {
      allListItems += `
            <li class="list__item">
            <div class = "list__item-div">
            <div class = "list__item-div-span">
              <span class="list__item-text">${itemList.name}</span>
              </div>
              <button class="edit" data-id="${itemList.id}"><i class="far fa-edit"></i></button>
              <button class="delete" data-id="${itemList.id}"><i class="far fa-trash-alt"></i></button>
              </div>
            </li>`;
    });
    $(".list").html(allListItems);
  }
  const toDoList = new ToDoList();
  displayToDolistItems(toDoList.list);
  let editId = null;
  const addButton = document.querySelector("#add");
  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.querySelector(".input").value;
    if (name) {
      toDoList.create(name);
      document.querySelector(".input").value = "";
    }
    displayToDolistItems(toDoList.list);
  });

  $("#edit").click(function (event) {
    event.preventDefault();
    const name = $(".input").val();
    if (name) {
      toDoList.edit(editId, name);
      $(".input").val("");
      $("#add").prop("disabled", false);
      $("#edit").prop("disabled", true);
    }
    displayToDolistItems(toDoList.list);
  });
  $("body").on("click", ".edit", function (event) {
    event.preventDefault();
    const text = $(this).prev().text();
    editId = +$(this).data("id");
    $(".input").val(text);
    $("#add").prop("disabled", true);
    $("#edit").prop("disabled", false);
  });
  $("body").on("click", ".delete", function (event) {
    event.preventDefault();
    const id = +$(this).data("id");
    toDoList.remove(id);
    displayToDolistItems(toDoList.list);
  });
});
