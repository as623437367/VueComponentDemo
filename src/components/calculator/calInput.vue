<template>
  <div>
    <input type="number" value="" @input="setNumber" />
  </div>
</template>

<script>
export default {
  name: "calInput",
  data() {
    return {};
  },
  props: {
    field: String
  },
  methods: {
    setNumber(e) {
      // console.log(e.target.value);
      const val = Number(e.target.value);
      this.$emit("dispatch", "SET_DATA", this.field, val);
    }
  }
};
</script>

<style scoped></style>
