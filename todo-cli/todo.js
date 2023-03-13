const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      const today = new Date()
      return all.filter(todo => new Date(todo.dueDate) < today && !todo.completed)
    }
  
    const dueToday = () => {
      const today = new Date()
      return all.filter(todo => new Date(todo.dueDate).toDateString() === today.toDateString() && !todo.completed)
    }
  
    const dueLater = () => {
      const today = new Date()
      return all.filter(todo => new Date(todo.dueDate) > today && !todo.completed)
    }
  
    const toDisplayableList = (list) => {
      return list.map((todo, index) => {
        return `${index + 1}. ${todo.title} - ${todo.dueDate}`
      }).join('\n')
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  const todos = todoList();
  
  todos.add({ title: 'Submit assignment', dueDate: '2023-03-10', completed: false })
  todos.add({ title: 'Pay rent', dueDate: '2023-03-12', completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: '2023-03-12', completed: false })
  todos.add({ title: 'File taxes', dueDate: '2023-03-13', completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: '2023-03-13', completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
  