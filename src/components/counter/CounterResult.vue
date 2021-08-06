<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  name: "counterresult",
  props: {
    result: Number
  }
};
</script>

<style scoped></style>
