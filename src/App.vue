<script setup>
import TopHead from "@/components/TopHead.vue";
import Loading from "@/components/Loading.vue";
</script>

<template>
  <header>
    <TopHead/>
  </header>
  <div v-show="isLoading" class="v-loading" id="loading">
    <Loading/>
  </div>
  <main v-show="main">
    <router-view/>
  </main>
</template>

<script>
import router from "@/utils/router";

export default {
  data() {
    return {
      isLoading: true,
      main: false,
    }
  },
  created() {
    this.$nextTick(function () {
      this.Loading();
      const lo = document.getElementById("loading")
      lo.style.height = String(Number(document.body.clientHeight) - 60) + "px";
    })
  },

  methods: {
    Loading() {
      router.beforeEach(() => {
        this.isLoading = true;
        this.main = false;
      })
      router.afterEach(() => {
        this.isLoading = false;
        this.main = true;
      })
    }
  }
}
</script>

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

.v-loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

main{
  width: 100%;
  max-width: 1064px;
  display: flex;
  justify-content: center;
}
</style>
