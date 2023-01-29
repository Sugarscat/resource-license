<template>
  <div class="main-content">
    <div class="ac-date">
      <span>2023.01.23</span>
      <Decorate/>
    </div>
    <div></div>
  </div>
</template>

<script>
import Decorate from "@/components/Decorate.vue";

export default {
  name: "Authorized",
  components: {Decorate},
  date() {
    return {
      acNumber:[],
    }
  }
}
</script>

<style scoped>
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
}

.ac-date {
  height: 25px;
  padding: 2px 10px;
  font-size: 20px;
  margin: 20px 0;
  border: 1px solid var(--vt-c-gray);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
</style>
