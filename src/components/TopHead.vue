<template>
  <IconLogo/>
  <div class="choice-language">
        <span class="separate">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="icon-language"><path d="M0 0h24v24H0z" fill="none" ></path><path  d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path>
            </svg>
          </span>
        </span>
    <div class="language-flyout-menu">
      <button ref="btnZh" class="active" @click="choiceZh">中文</button>
      <button ref="btnEn" class="" @click="choiceEn">English</button>
      <button ref="btnJp" class="" @click="choiceJp">日本語</button>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import IconLogo from "@/components/IconLogo.vue";

export default {
  name: "ChoiceLanguage",
  components: {IconLogo},
  created(){
    this.$nextTick(function(){
      this.choiceLanguage();
    })
  },

  methods: {
    choiceLanguage() {
      switch (Cookies.get('language')) {
        case 'zh':
          this.choiceZh();
          break;
        case 'en':
          this.choiceEn();
          break;
        case 'jp':
          this.choiceJp();
          break;
        default:
          this,this.choiceZh();
          break;
      }
    },
    choiceZh() {
      this.$i18n.locale = 'zh';
      this.$refs.btnZh.className = 'active';
      this.$refs.btnEn.className = '';
      this.$refs.btnJp.className = '';
      Cookies.set(
          'language',
          'zh'
      );
    },
    choiceEn() {
      this.$i18n.locale = 'en';
      this.$refs.btnZh.className = '';
      this.$refs.btnEn.className = 'active';
      this.$refs.btnJp.className = '';
      Cookies.set(
          'language',
          'en'
      );
    },
    choiceJp() {
      this.$i18n.locale = 'jp';
      this.$refs.btnZh.className = '';
      this.$refs.btnEn.className = '';
      this.$refs.btnJp.className = 'active';
      Cookies.set(
          'language',
          'jp'
      );
    },
  },
}
</script>

<style scoped>
.choice-language {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,0);
  background: rgba(0,0,0,0);
  margin: 0 40px 0 0;
}

.choice-language .separate {
  width: 40px;
  height: 30px;
  border-left: 1px solid var(--menu-c-divider);
  border-right: 1px solid var(--menu-c-divider);
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.dark .choice-language .separate {
  border-left: 1px solid var(--vt-c-divider-dark-1);
  border-right: 1px solid var(--vt-c-divider-dark-1);
}

.choice-language .icon {
  height: 100%;
  width: 18px;
  display: flex;
}

.choice-language .icon-language {
  fill: var(--menu-c-text);
}

.language-flyout-menu {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  position: absolute;
  top: 45px;
  transition: opacity .25s,visibility .25s,transform .25s;
  background-color: var(--menu-c-background);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--menu-c-divider);
  box-shadow: var(--menu-shadow-2);
  z-index: 10;
}

.choice-language:hover .language-flyout-menu {
  display: flex;
}

.language-flyout-menu button {
  height: 24px;
  width: 80px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0);
  background-color: var(--color-background-mute);
  margin: 4px 0;
  cursor: pointer;
  color: var(--menu-c-text);
}

.active {
  background: var(--vt-c-blue-lighter) !important;
}

@media screen and (max-width: 440px) {
  .choice-language {
    margin: 0 10px 0 0;
  }

  .language-flyout-menu {
    right: 10px;
  }
}

</style>