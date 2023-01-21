<script setup>
import TopHead from "@/components/TopHead.vue";
import Decorate from "@/components/Decorate.vue";
import MailIcon from '@/components/IconMail.vue'
import EmailContent from "@/components/EmailConnect.vue";
import BiliConnect from "@/components/BiliConnect.vue";
</script>

<template>
    <header>
      <TopHead/>
    </header>
    <main>
      <div class="main-content SmileySans">
        <div class="text-title">
          <span>{{$t('rtTitle')}}</span>
          <Decorate/>
        </div>
        <div class="text-content">
          <span>{{$t('rtContent1')}}</span>
          <span>{{$t('rtContent2')}}</span>
        </div>
        <div class="text-title">
          <span>{{$t('noNeedTitle')}}</span>
          <Decorate/>
        </div>
        <div class="text-content">
          <span>{{$t('noNeedContent1')}}</span>
          <span>{{$t('noNeedContent2')}}</span>
        </div>
        <div class="text-title">
          <span>{{$t('needTitle')}}</span>
          <Decorate/>
        </div>
        <div class="text-content">
          <span>{{$t('needContent1')}}</span>
          <span>{{$t('needContent2')}}</span>
          <span>{{$t('needContent3')}}</span>
          <span>{{$t('needContent4')}}</span>
        </div>
        <div class="text-title">
          <span>{{$t('contactMeTitle')}}</span>
          <Decorate/>
        </div>
        <div class="text-content">
          <span>{{$t('contactMeContent1')}}</span>
          <span>{{$t('contactMeContent2')}}</span>
          <span>{{$t('contactMeContent3')}}tsugarcat@gmail.com
            <a class="email-content" href="mailto:tsugarcat@gmail.com">
              <MailIcon/>
            </a>
          </span>
        </div>
        <div class="text-title">
          <span>{{$t('auTitle')}}</span>
          <Decorate/>
        </div>
        <div class="text-content">
          <span>{{$t('auContent1')}}</span>
          <span>{{$t('auContent2')}}</span>
          <div class="authorization-notice msyh">
            <span>{{$t('auTextContent1')}}</span>
            <span>{{$t('auTextContent2')}}</span>
            <span>{{$t('auTextContent3')}}</span>
            <span>{{$t('auTextContent4')}}</span>
            <span>{{$t('auTextContent5')}}</span>
          </div>
          <span>{{$t('auContent3')}}</span>
          <BiliConnect/>
          <span>{{$t('auContent4')}}</span>
          <span>{{$t('auContent5')}}</span>
          <EmailContent/>
          <span>{{$t('auContent6')}}</span>
        </div>
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
