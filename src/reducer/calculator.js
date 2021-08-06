import {compute} from '@/util/index.js'
function calculatorReducer(data) {
  function setNumber(feild, val) {
    data[feild] = val
    data.result = compute(data.curmethod, data.fristNumber, data.secondNumber)
  }
  function changemethod(method) {
    data.curmethod = method
    data.result = compute(data.curmethod, data.fristNumber, data.secondNumber)
  }
  return {
    setNumber,
    changemethod
  }
}
export default calculatorReducer