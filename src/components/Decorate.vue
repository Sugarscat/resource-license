<template>
  <div class="decorate-content">
    <div class="round-pink"></div>
    <div class="round-blue"></div>
  </div>
</template>

<script>
export default {
  name: "Decorate"
}
</script>

<style scoped>
.decorate-content {
  position: relative;
}

.round-pink {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: var(--vt-c-pink-lighter);
  position: absolute;
  right: 8px;
  top: 10px;
  z-index: 0;
}

.round-blue {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: var(--vt-c-blue-lighter);
}
</style>