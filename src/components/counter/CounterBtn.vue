<template>
  <div>
    <button @click="compute">{{ innerText }}</button>
  </div>
</template>

<script>
export default {
  name: "counterbtn",
  props: {
    innerText: String,
    active: String
  },
  methods: {
    compute() {
      this.$emit("dispatch", this.active);
    }
  }
};
</script>

<style scoped></style>
