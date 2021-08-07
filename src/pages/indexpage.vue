<template>
  <div>
    <Counter />
    <hr />
    <Calculator />
    <hr />
    <to-do />
  </div>
</template>

<script>
import Counter from "@/components/counter/index";
import Calculator from "@/components/calculator/index";
import toDo from "@/components/todo/index";
export default {
  name: "indexpage",
  components: {
    Counter,
    Calculator,
    toDo
  }
};
</script>

<style scoped></style>
