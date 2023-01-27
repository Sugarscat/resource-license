<script setup>
import TopHead from "@/components/TopHead.vue";
</script>

<template>
    <header>
      <TopHead/>
    </header>
    <main>
      <router-view/>
    </main>
</template>

<style>
header{
  width: 100%;
  max-width: 1064px;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
}

main{
  width: 100%;
  max-width: 1064px;
  display: flex;
  justify-content: center;
}
</style>
