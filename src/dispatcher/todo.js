import {REMOVE,COMPLETED,ADD} from '@/actions/todo'
import reducer from '@/reducer/todo'

export default (ctx)=> {
  const {add,remove,completed} = reducer(ctx.$data.todolist)
  return function(type,...args) {
    let obj1 = ctx.$data.todolist
    switch(type) {
      case REMOVE:
        ctx.$data.todolist = remove(...args)
        break
      case COMPLETED:
        ctx.$data.todolist = completed(...args)
        break
      case ADD:
        ctx.$data.todolist = add(...args)
        break
      
      default:
        break
    }
  }
}