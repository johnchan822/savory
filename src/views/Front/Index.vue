<template>
  <Loading :active="isLoading"></Loading>
  <Kv></Kv>
  <Categories class="animated"></Categories>
  <BestSale :bestSale = products class="animated"></BestSale>
  <Banner></Banner>
  <GuestSay class="animated"></GuestSay>
  <About class="animated"></About>
</template>

<script>
import Kv from '@/components/Front/Kv.vue';
import Categories from '@/components/Front/Categories.vue';
import BestSale from '@/components/Front/BestSale.vue';
import GuestSay from '@/components/Front/GuestSay.vue';
import About from '@/components/Front/About.vue';
import Banner from '@/components/Front/Banner.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Kv,
    Categories,
    BestSale,
    GuestSay,
    About,
    Banner,
  },
  methods: {
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    scrollFunction() {
      // 1.取得當前滾動位置
      const windowScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const animated = document.querySelectorAll('.animated');
      animated.forEach((item) => {
        const thisPos = item.offsetTop;
        // console.log(thisPos);
        if ((windowScrollY + (windowHeight / 1.8)) >= thisPos) {
          item.classList.add('fadeIn');
          // console.log(item);
        }
      });
    },
  },
  mounted() {
    this.getProducts();
    window.addEventListener('scroll', this.scrollFunction);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollFunction);
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};

</script>
<style lang="scss">
@import '@/assets/stylesheets/main';
.animated {
  opacity: 0;
  transition: all 1s;
  transform: translateY(50px);
}
.fadeIn {

  opacity: 1;
  transform: translateY(0);
}
</style>
