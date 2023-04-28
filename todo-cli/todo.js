/* eslint-disable no-undef */
const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const d = new Date();
    return all.filter((task) => task.dueDate < d.toLocaleDateString("en-CA"));
  };

  const dueToday = () => {
    const d = new Date();
    return all.filter((task) => task.dueDate == d.toLocaleDateString("en-CA"));
  };

  const dueLater = () => {
    const d = new Date();
    return all.filter((task) => task.dueDate > d.toLocaleDateString("en-CA"));
  };
   const toDisplayableList = (list) => {
    return list
      .map(
        (todo) => `${todo.completed ? '[x]' : '[ ]'} ${todo.title} ${todo.dueDate === today ? '' : todo.dueDate}`,
      )
      .join('\n');
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
