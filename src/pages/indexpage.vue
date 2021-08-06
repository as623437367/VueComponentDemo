<template>
  <div>
    <Counter />
    <hr />
    <Calculator />
  </div>
</template>

<script>
import Counter from "@/components/counter/index";
import Calculator from "@/components/calculator/index";
export default {
  name: "indexpage",
  components: {
    Counter,
    Calculator
  }
};
</script>

<style scoped></style>
