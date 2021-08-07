<template>
  <div>
    <form @submit="submit">
      <input type="text" v-model.trim="inputval" />
    </form>
  </div>
</template>

<script>
export default {
  name: "todoform",
  data() {
    return {
      inputval: ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.inputval.length === 0) {
        return;
      }
      this.$emit("dispatch", "ADD", {
        id: Date.now(),
        val: this.inputval,
        completed: false
      });
      this.inputval = "";
    }
  }
};
</script>

<style scoped></style>
