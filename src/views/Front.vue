<template>
  <Navbar :isOtherPage ="isOtherPage"></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Front/Navbar.vue';
import Footer from '@/components/Front/Footer.vue';

export default {
  data() {
    return {
      isOtherPage: true,
    };
  },
  components: {
    Navbar, Footer,
  },
  mounted() {
    if (this.$route.name !== 'index') {
      this.isOtherPage = true;
    } else if (this.$route.name === 'index') {
      this.isOtherPage = false;
    }
  },
  updated() {
    if (this.$route.name !== 'index') {
      this.isOtherPage = true;
    } else if (this.$route.name === 'index') {
      this.isOtherPage = false;
    }
  },
};

</script>

<style lang="scss">
@import '../assets/stylesheets/main';
@import '../assets/stylesheets/public';
</style>
