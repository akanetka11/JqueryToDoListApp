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
  //редактирую элемент
  edit(id, newValue) {
    this.list = this.list.map((item) => {
      if (item.id === id) {
        item.name = newValue;
      }
      return item;
    });
  }
}
