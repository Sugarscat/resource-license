<template>
  <div class="main-content">
    <div class="text-title">
      <span>{{$t('home.rtTitle')}}</span>
      <Decorate/>
    </div>
    <div class="text-content">
      <span>{{$t('home.rtContent1')}}</span>
      <span>{{$t('home.rtContent2')}}</span>
    </div>
    <div class="text-title">
      <span>{{$t('home.noNeedTitle')}}</span>
      <Decorate/>
    </div>
    <div class="text-content">
      <span>{{$t('home.noNeedContent1')}}</span>
      <span>{{$t('home.noNeedContent2')}}</span>
    </div>
    <div class="text-title">
      <span>{{$t('home.needTitle')}}</span>
      <Decorate/>
    </div>
    <div class="text-content">
      <span>{{$t('home.needContent1')}}</span>
      <span>{{$t('home.needContent2')}}</span>
      <span>{{$t('home.needContent3')}}</span>
      <span>{{$t('home.needContent4')}}</span>
    </div>
    <div class="text-title">
      <span>{{$t('home.contactMeTitle')}}</span>
      <Decorate/>
    </div>
    <div class="text-content">
      <span>{{$t('home.contactMeContent1')}}</span>
      <span>{{$t('home.contactMeContent2')}}</span>
      <span>{{$t('home.contactMeContent3')}}tsugarcat@gmail.com
            <a class="email-content" href="mailto:tsugarcat@gmail.com">
              <IconMail/>
            </a>
          </span>
    </div>
    <div class="text-title">
      <span>{{$t('home.auTitle')}}</span>
      <Decorate/>
    </div>
    <div class="text-content">
      <span>{{$t('home.auContent1')}}</span>
      <span>{{$t('home.auContent2')}}</span>
      <div class="authorization-notice">
        <span>{{$t('home.auTextContent1')}}</span>
        <span>{{$t('home.auTextContent2')}}</span>
        <span>{{$t('home.auTextContent3')}}</span>
        <span>{{$t('home.auTextContent4')}}</span>
        <span>{{$t('home.auTextContent5')}}</span>
      </div>
      <span>{{$t('home.auContent3')}}</span>
      <BiliConnect/>
      <span>{{$t('home.auContent4')}}</span>
      <span>{{$t('home.auContent5')}}</span>
      <EmailConnect/>
      <span>{{$t('home.auContent6')}}</span>
    </div>
  </div>
</template>

<script>
import Decorate from "@/components/Decorate.vue";
import BiliConnect from "@/components/BiliConnect.vue";
import EmailConnect from "@/components/EmailConnect.vue";
import IconMail from "@/components/IconMail.vue";

export default {
  name: "Home",
  components: {IconMail, EmailConnect, BiliConnect, Decorate}
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

.text-title {
  height: 25px;
  padding: 2px 10px;
  font-size: 20px;
  margin: 20px 0;
  border: 1px solid var(--vt-c-gray);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.text-content {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--vt-c-blue-lighter);
}

.text-content span {
  padding: 10px 0;
}

.email-content {
  display: flex;
}

.authorization-notice {
  width: 100%;
  border: 1px solid var(--vt-c-gray);
  border-radius: 5px;
  background-color: var(--vt-c-text-dark-2);
}

.authorization-notice span {
  padding: 3px;
  font-size: 14px;
}

@media screen and (max-width: 440px) {
  .main-content {
    padding: 20px 10px;
  }
}
</style>