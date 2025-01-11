<template>
  <section class="site-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 site-title">
          <h3 class="title-text text-uppercase">Hey, I am Kamal👋</h3>
          <h4 class="text-uppercase">
            I am a <span id="subheading">{{ typeValue }} <span class="blinking-cursor">|</span> <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span></span>
          </h4>
          <hr>
          <p>🔥 Experienced web developer with 5+ years of expertise in Web & software development.</p>
          <p v-motion="{
      initial: { y: 100, opacity: 0 },
      enter: { y: 0, opacity: 1 }
    }">
            🔒 Proficient in Laravel, Vue.js, JavaScript, and WordPress, committed to developing high standards secure web applications with good coding standards.
          </p>
          <p v-motion="{
      initial: { y: 100, opacity: 0 },
      enter: { y: 0, opacity: 1 }
    }">
            🌟 I have good expertise in WordPress, Elementor, and JetEngine to build complete dynamic websites on WordPress.
          </p>
          <p><github-button href="https://github.com/mostafaIsMaster">Follow @kamal</github-button></p>
          <hr>
          <div class="social">
            <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/kamalmdmostafa/" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
                <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"></path>
              </svg>
           </a>
            <!-- <a target="_blank" rel="noreferrer" href="https://github.com/kamal" class="social-link"><i class="fab fa-github"></i></a> -->
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamalmdmostafa/" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mostafakamal25/" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="mailto: mostafakamal9300@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
          </div>
          <div class="site-buttons">
            <div class="d-flex flex-row flex-wrap">
              <button type="button" class="btn button primary-button mr-4 text-uppercase first-btn">
                <a href="https://www.fiverr.com/s/2K5jLo4" target="_blank">RESUME &nbsp;<i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
              </button>
              <button type="button" class="btn button secondary-button text-uppercase second-btn">
                <a href="https://www.fiverr.com/kamalmdmostafa">Hire Me</a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 banner-image">
          <Vue3Lottie :animationData="DeveloperJSON" :speed="1" loop autoplay />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie';
import DeveloperJSON from '@/assets/developer.json';
import GithubButton from 'vue-github-button';
export default {
  name: 'AboutMe',
  components: {
    Vue3Lottie,
    GithubButton
  },
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      displayTextArray: ['SOFTWARE ENGINEER', 'FULL STACK DEVELOPER', 'LARAVEL DEVELOPER', 'WordPress Expert'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      DeveloperJSON
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length) this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  }
};
</script>

<style scoped>
.blinking-cursor {
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>