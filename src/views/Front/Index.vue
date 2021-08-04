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
      products: [],
      isLoading: false,
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
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
    scrollFunction() {
      // 1.取得當前滾動位置
      const windowScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const animated = document.querySelectorAll('.animated');
      animated.forEach((item) => {
        const thisPos = item.offsetTop;
        console.log(thisPos);
        if ((windowScrollY + windowHeight) >= thisPos) {
          item.classList.add('fadeIn');
          // console.log(item);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.getProducts();
    window.addEventListener('scroll', this.scrollFunction);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollFunction);
  },
};

</script>
<style lang="scss">
@import '@/assets/stylesheets/main';
.animated {
  opacity: 0;
  -webkit-transition: all 1.5s;
  -o-transition: all 1.5s;
  transition: all 1.5s;
  transform: translateY(50px);
}
.fadeIn {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
</style>
