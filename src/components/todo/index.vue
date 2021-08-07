<template>
  <div>
    <todo-title :title="title" />
    <todo-form @dispatch="dispatch" />
    <todo-list :todolist="todolist" @dispatch="dispatch" />
  </div>
</template>

<script>
import todoTitle from "./todotitle.vue";
import todoForm from "./todoform.vue";
import todoList from "./todolist/index.vue";

import dispatch from "@/dispatcher/todo";

export default {
  name: "todo",
  data() {
    return {
      title: "TODO LIST",
      todolist: []
    };
  },
  components: {
    todoTitle,
    todoForm,
    todoList
  },
  methods: {
    dispatch(...args) {
      // console.log(...args);
      dispatch(this)(...args);
    }
  }
};
</script>

<style scoped></style>
