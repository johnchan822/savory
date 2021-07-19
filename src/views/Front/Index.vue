<template>
  <Loading :active="isLoading"></Loading>
  <Kv></Kv>
  <Categories></Categories>
  <BestSale :bestSale = products></BestSale>
  <Banner></Banner>
  <GuestSay></GuestSay>
  <About></About>
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
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
@import '@/assets/stylesheets/main';
</style>
