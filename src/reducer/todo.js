function todoReducer(data) {
  function add(newval) {
    return data.concat(newval)
  }
  function remove(id) {
    return data.filter(item => item.id !== id)
  }
  function completed(id) {
    return data.filter(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
  }
  return {
    add,
    remove,
    completed
  }
}
export default todoReducer