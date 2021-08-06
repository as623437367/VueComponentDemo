<template>
  <div>
    <Counter-result :result="result" />
    <Counter-btn innerText="+" active="plus" @dispatch="dispatch" />
    <Counter-btn innerText="-" active="minus" @dispatch="dispatch" />
  </div>
</template>

<script>
import CounterResult from "./CounterResult";
import CounterBtn from "./CounterBtn";

import dispatch from "@/dispatcher/counter";
export default {
  name: "Counter",
  components: {
    CounterResult,
    CounterBtn
  },
  data() {
    return {
      result: 0
    };
  },
  methods: {
    dispatch(e) {
      dispatch(this)(e);
    }
  }
};
</script>

<style scoped></style>
