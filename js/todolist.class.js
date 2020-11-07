class ToDoList {
  constructor(list = []) {
    this.list = list;
  }
  //создаю элемент
  create(name, event) {
    let id = 1;
    if (this.list.length) {
      id = this.list[this.list.length - 1].id + 1;
    }
    this.list.push({ id, name });
  }
}
