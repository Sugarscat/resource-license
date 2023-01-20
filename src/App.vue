<script setup>
import TopHead from "@/components/TopHead.vue";
</script>

<template>
  <header>
    <TopHead/>
  </header>
  <main>
    <div class="main-content SmileySans">
      <span class="rt-title">{{$t('rtTitle')}}</span>
    </div>
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
  justify-content: space-between;
}

main{
  width: 100%;
  max-width: 1064px;
  display: flex;
  justify-content: center;
}

.main-content {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.rt-title {
  font-size: 25px;
}
</style>
