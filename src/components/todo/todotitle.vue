<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "todotitle",
  props: {
    title: String
  }
};
</script>

<style scoped></style>
