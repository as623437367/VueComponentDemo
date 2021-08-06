import {SET_DATA,CHANGE_METHOD} from '@/actions/calculator.js'
import calculatorReducer from '@/reducer/calculator.js'

export default (ctx) => {
  const {setNumber,changemethod} = calculatorReducer(ctx.$data);
  return function dispatcher(type,...args) {
    switch(type) {
      case SET_DATA:
        return setNumber(...args)
      case CHANGE_METHOD:
        return changemethod(...args)
      default:
        break
    }
  }
}