<template>
  <div>
    <ul>
      <todo-item
        @handleitem="handleitem"
        v-for="(item, index) in todolist"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import todoItem from "./todoitem.vue";
export default {
  name: "todolist",
  props: {
    todolist: Array
  },
  components: {
    todoItem
  },
  methods: {
    handleitem(...args) {
      // console.log(...args);
      this.$emit("dispatch", ...args);
    }
  }
};
</script>

<style scoped></style>
