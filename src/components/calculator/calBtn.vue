<template>
  <div>
    <button @click="inpmethod" :class="{ current: method === curmethod }">
      {{ innerText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "calBtn",
  props: {
    innerText: String,
    method: String,
    curmethod: String
  },
  methods: {
    inpmethod() {
      this.$emit("dispatch", "CHANGE_METHOD", this.method);
    }
  }
};
</script>

<style scoped>
.current {
  background: orange;
  color: #fff;
}
</style>
