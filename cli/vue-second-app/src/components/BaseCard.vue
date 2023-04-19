<template>
  <div class="card rounded-4 shadow px-3 py-3 mb-3">
    <slot name="header"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}
</style>
