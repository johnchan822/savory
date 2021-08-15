<template>
<Loading :active="isLoading"></Loading>
  <div id="products">
  <template v-for = "(item, key) in sectionBanner" :key= "item+key">
    <div class="section_banner"  v-if =" item.category ===  selectCategory"
    :style="{backgroundImage:`url(${item.imgUrl})`}">
      <div class="w1400">
        <h1 class="title">{{item.title}}</h1>
      </div>
    </div>
    </template>
  <div class="w1400 inner">
<swiper :spaceBetween="30" :loop="false"
:autoplay='{
  "delay": 3000,
  "disableOnInteraction": false
        }'
:slidesPerView="2"
:navigation="true"
:breakpoints='{
  "320": {
    "slidesPerView": 1,
    "slidesPerGroup": 1
  },
  "768": {
    "slidesPerView": 2,
    "slidesPerGroup": 2
  },
    "1280": {
    "slidesPerView": 5,
    "slidesPerGroup": 10
  },
  }'>
      <swiper-slide v-for="(item, index) in   categories" :key="item+index">
                  <div class="list_item" @click.prevent="selectCategory = item"
                  :class="{ 'active' : item === selectCategory}" >
                    {{item}} </div>
              </swiper-slide>
        </swiper>
        <div class="all_products">
              <router-link class="product_item"  v-for=" (item, key) in  filterProducts"
                :key=item.id+key  :to="`/product/${item.id}`">
                <div class="overflow">
                <div class="img" :style="{backgroundImage:`url(${item.imageUrl})`}" ></div>
                </div>
                    <div class="content">
                  <div class="tag">{{item.category}}</div>
                <h6 class="prodcut_title">{{item.title}}</h6>
                <p class="prodcut_title">NT${{$filters.currency(item.price)}}</p>
                      <button class='main_btn' @click.prevent='addToCart(item.id)'>
                  <div class="bi bi-cart">加入購物車</div><span></span></button>
              </div>
            </router-link>
            </div>
    <div id="domGetNewPage" ref="pagination"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import emitter from '@/assets/javascript/emitter';

export default {
  data() {
    return {
      products: [],
      selectCategory: '全部',
      categories: [],
      pagination: {},
      isLoading: false,
      sectionBanner: [
        {
          category: '甜點',
          title: '甜點留胃',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626591837559.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OKyiG01LwdOAsHqHaHgjKT2tPEDzJKE6D3liCrqtPz2uZ1zjKljM3o57VnupRqeMwtK2otiKF70UtKr65ovrtApzYV2hJiDAMa3B4l6jmBFlJBzgcmDAmV%2FfqmyXqbrXzpfFsqP6Fcb6driEkZ7FuqLPWDNjFD%2Bq8ggqKZaCOwd%2BqfbJtnC9SWg5LnAxw4VkszO%2B1whd%2BTkrWQJ39piGppn5hYStlR9gqkGqZnMyI6yjnd0NFSQEh%2FyB0k%2FeIk%2BWp1Qie6rCpJXu4sygxH5BoCbP84yAePQxcctFtQvKtDSMcn1bo%2B6azonCfeWday1bJ%2Bbr%2BHCQ1gbvUZcDClTZ%2FA%3D%3D',
        },
        {
          category: '前菜',
          title: '前菜淺嚐',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626592790549.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WGXvWxLvsjoFA5YikySAjSVyAbFU2%2FF7iNdI%2BC4J3rk1T%2BHGthp4I6igaXgbLiunQKM9AudMM%2BudYnH%2FGuMjNW61iReig7ksWA5A3o%2BF6B3uiwX%2BbiFIOfw7lYOo5j17ScQimGff6RMHuBmubB0QiYOY1zsgBHRU0BDaL1fGeU1Y6v0CyeSZ9LtMf53d9K4xpLOyGkhRFV%2FHIw6r%2F%2FP1qSGfmw7MFUJINhJf2p1zHah73qBgbDnfi6tdJpFemkPxB8z8ldlvTVOFz0E9yIbG2mYcio%2FW4S3b5RSDXyi27dYgwcKphZ1XEi34v%2Fm%2B39HS%2BybzNYg%2F9i5YeWwLRsljfA%3D%3D',
        },
        {
          category: '主餐',
          title: '主餐必點',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626592394874.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ifYqj0UrOdk2nsoYuLuYwtDff7oe%2Bedu9xlXPsrLX7lWjLIBysGUSDl19JGN8r693eziN1VE%2F4QFwbSRY3GLyM%2BOfEmG24ym5BLJWu%2FAu6dagzhKCbl4NI7pd4o%2FwJ39cF5U2ACcKOlD2swijzqbRtbFNSj%2FxvNJMcYBgTVQODP6wGYA6USW0DJTvbMujPIZesmJhDPfc5gghzW%2FFpE%2B5OsTVFnEoqd0S87hKfzQpFs%2BdpfbWkAmSajulMGGm1CGYMUa2jfeKzFvksUtxruOJdgFaOfbYX%2FiE8MQgoh3uD4dTAkWwjdhJkXWBmJ492EY%2FzhTLdGdU0H2SBggFAps%2BA%3D%3D',
        },
        {
          category: '飲品',
          title: '特調飲品',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626592143584.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KX05E8h3aNy7MPK8PjwdF7ztti%2B8EdbE5YcL7VCarlBouptyPfois1w%2BjMhMCdoPb8J2NJOmN%2BO8Xzn%2BDzpsSv69R07TIGE4aLLnffN1D1J2qhIl%2FskvFeNRrIvsZ59FFFzj60lVLrsCH34eB9GrHUFaII4Exeebp%2Fmd2KsWxLbvdptVGA8TNR8yx2WzJP%2FqmyfFS6R5GfThEBCmiJ%2Fa4Rnn4kcv%2Fi5AVlR4O2zFHor8CSw8QyZ4t8h2yz2oDNX%2BmD4RDsipsJMIuU3fIiHHgkB1Sl42mkWkYI8PnVlSO30TRmPT2zWQSepEeaGb9Jd%2F2%2BalizeTLk2RvpoGzYqfcg%3D%3D',
        },
        {
          category: '全部',
          title: '全部餐點',
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626593258925.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=l%2FolLIsUbravyVLnM6fKpWQDPrbA7xwof7JC1NVvZzq15TsZn1PLi58NPu0W3fze1NzCgOqNMKDuJe1TfoAb4dKEHRdjznjaQyfXf8%2BrkYsdYN%2FnJhk6dhSolXoUdqg1l5uu3u2yZdDcXMRYoEk%2BiIGPLowDwO0ofdYnPOC8UBs7tmO8oZccGyJofAyS%2BHfOF4RJF%2Fs4g0qeV17axZCTj8eVUYk%2B28glK%2BuFj8je2vfLbBvgVPoehbY5gFSVYVNCrolT9TAJkaeAWUR8rDl6Z53JcbXS%2BQ77dZsX6tqr%2Bl%2F9E%2BjdSN3dWt%2FT7%2FjiNWBN4btd9uMiNzwdSNph4pqhYQ%3D%3D',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProducts(page = 1) {
      this.selectCategory = this.$route.params.select;
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.products = [...this.products, ...res.data.products];
        this.pagination = res.data.pagination;
        this.getCategories();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((item) => {
        categories.add(item.category);
      });
      this.categories = [...categories];
      this.categories.unshift('全部');
    },
    scrollFunction() {
      // 1.取得當前滾動位置
      const pageDom = this.$refs.pagination.offsetTop;
      if (!this.isLoading) {
        const windowScrollY = window.scrollY; // 目前捲動位置
        const windowHeight = window.innerHeight; // 畫面的高度
        const current = windowScrollY + windowHeight;
        // console.log(windowScrollY, windowHeight);
        if (current > pageDom && this.pagination.has_next) {
          this.getProducts(this.pagination.current_page + 1);
        }
      }
    },
    addToCart(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart })
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            this.isLoading = false;
            emitter.emit('update-cart');
            this.$swal.fire({
              icon: 'success',
              title: '加入購物車成功',
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            this.$swal.fire({
              icon: 'error',
              title: '加入購物車失敗',
              showConfirmButton: false,
              timer: 2000,
            });
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
    filterProducts() {
      if (this.selectCategory !== '全部') {
        return this.products.filter((item) => item.category === this.selectCategory);
      }
      return this.products;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/stylesheets/public';
  #products{
    position: relative;
    margin-bottom:3%;
    .inner{
      padding: 3% 0;
      // .list{
      //   text-align: center;
        // width: 100%;
        // display: flex;
        // justify-content: center;
         // background: $color-main;
        //     color:  $color-main;
        //     color: #fff;
        .swiper-container{
          overflow: visible;
        }
        .list_item{
          text-align:center;
          border: 1px solid $color-main;
          cursor: pointer;
          padding: 20px 40px;
          color: $color-main;
           transition: .3s;
        //  &:last-of-type {
        //     margin-right: 0%;
        //  }
         &.active,&:hover{
           background:  $color-main;
           border: 1px solid #fff;
           color: #fff;
           transition: .3s;
         }
        }
      // }
      .all_products{
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        .product_item{
          cursor: pointer;
          margin-top:5%;
          margin-right:5%;
          width: 28%;
          &:nth-child(3n){
              margin-right:0%;
          }
          // box-shadow: 1px 1px 5px $color-main;
          &::after{
              content: '';
              height: 3px;
              width: 0%;
              background-color: $color-main;
              bottom: 0;
              display: block;
              transition: .3s;
          }
          &:hover{
            &::after{
            width: 100%;
            transition: .3s;
            }
            .img{
                  transition: .3s;
                  transform: scale(1.1);
            }
          }
          background: rgb(240, 240, 240);
            width: 30%;
            .prodcut_title{
            font-weight:bold;
            margin: 16px 0;
            }
            .content{
              margin: 30px;
            }
            .overflow{
              overflow: hidden;
            .img{
              transition: .3s;
              padding-bottom: 60%;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              width: 100%;
            }
          }
        }
      }
  }
  @media screen and(max-width:1024px) {
   .inner{
      .all_products{
        justify-content: space-between;
        .product_item{
          width: 48%;
          margin-right:0%;
            &:nth-child(3n){
              margin-right:0%;
          }
        }
      }
    }
  }
    @media screen and(max-width:480px) {
   .inner{
     .list_item{
       margin: 5% 0;
     }
      .all_products{
        .product_item{
          margin: 6% 0%;
            margin-right:0%;
          width: 100%;
              &:nth-child(3n){
              margin-right:0%;
          }
        }
      }
    }
  }
  }
</style>
