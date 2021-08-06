function compute(method, fn, sn) {
  switch (method) {
    case "PLUS":
      return fn + sn;
    case "MINUS":
      return fn - sn;
    case "TIMES":
      return fn * sn;
    case "DIV":
      return fn / sn;
    default:
      break;
  }
}
export{
  compute
}