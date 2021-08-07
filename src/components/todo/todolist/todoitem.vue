<template>
  <div>
    <input type="checkbox" @click="handleitem('COMPLETED', item.id)" />
    <span :class="{ completed: item.completed }">{{ item.val }}</span>
    <button @click="handleitem('REMOVE', item.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: "todoitem",
  props: {
    item: Object
  },
  methods: {
    handleitem(...args) {
      this.$emit("handleitem", ...args);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
