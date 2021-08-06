import reducer from '@/reducer/counter'
import { PLUS, MINUS } from '../actions/counter'

export default (ctx)=> {
  const {plus,minus} = reducer(ctx);
  return function dispather(type) {
    switch(type) {
      case PLUS:
        ctx.$data.result = plus()
        break
      case MINUS:
        ctx.$data.result = minus()
        break
      default:
        break
    }
  }
  
}