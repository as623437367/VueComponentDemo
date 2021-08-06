<template>
  <div>
    <cal-result :result="result" />
    <cal-input field="fristNumber" @dispatch="dispatch" />
    <cal-input field="secondNumber" @dispatch="dispatch" />
    <div class="btn">
      <cal-btn
        innerText="+"
        :curmethod="curmethod"
        method="PLUS"
        @dispatch="dispatch"
      />
      <cal-btn
        innerText="-"
        :curmethod="curmethod"
        method="MINUS"
        @dispatch="dispatch"
      />
      <cal-btn
        innerText="*"
        :curmethod="curmethod"
        method="TIMES"
        @dispatch="dispatch"
      />
      <cal-btn
        innerText="/"
        :curmethod="curmethod"
        method="DIV"
        @dispatch="dispatch"
      />
    </div>
  </div>
</template>

<script>
import calResult from "./calResult.vue";
import calInput from "./calInput.vue";
import calBtn from "./calBtn.vue";

import dispatch from "@/dispatcher/calculator.js";
export default {
  name: "calculator",
  data() {
    return {
      result: 0,
      curmethod: "PLUS",
      fristNumber: 0,
      secondNumber: 0
    };
  },
  components: {
    calResult,
    calInput,
    calBtn
  },
  methods: {
    dispatch(...args) {
      console.log(...args);
      dispatch(this)(...args);
    }
    //   compute(method, fn, sn) {
    //     switch (method) {
    //       case "PLUS":
    //         return fn + sn;
    //       case "MINUS":
    //         return fn - sn;
    //       case "TIMES":
    //         return fn * sn;
    //       case "DIV":
    //         return fn / sn;
    //       default:
    //         break;
    //     }
    //   },
    //   setNumber(feild, val) {
    //     this[feild] = val;
    //     this.setResult();
    //   },
    //   changemethod(method) {
    //     this.curmethod = method;
    //     this.setResult();
    //   },
    //   setResult() {
    //     this.result = this.compute(
    //       this.curmethod,
    //       this.fristNumber,
    //       this.secondNumber
    //     );
    //   }
  }
};
</script>

<style scoped>
.btn {
  display: flex;
}
</style>
