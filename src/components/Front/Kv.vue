<template>
<section id="kv" ref="kv" >
<swiper :spaceBetween="30" :centeredSlides="true" :effect="'fade'"
:autoplay='{
  "delay": 3500,
  "disableOnInteraction": false
}'  :navigation="true" class="mySwiper">
      <swiper-slide v-for="(item, index) in KvArray" :key="index">
                <div class="kv_item" :style="{backgroundImage:`url(${item.Picture})`}">
                  <div class="kv_title">
                    <h1 class="title">
                      {{item.Title}}
                    </h1>
                    <h5>{{item.Content}}</h5>
                  </div>
                  </div>
              </swiper-slide>
  </swiper>
  <div class="scrol" @click="scrollNext()"><span></span>SCORL</div>
  </section>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, {
  Autoplay, EffectFade,
} from 'swiper/core';

SwiperCore.use([Autoplay, EffectFade]);

export default {
  data() {
    return {
      KvArray:
      [
        {
          Title: '十年的堅持，成就好料理',
          Content: '由繁化簡，追求那恰如其巧的純粹味道',
          Picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626579612836.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=b03geU%2BkNNfmaPp5n4JlJajJ08iYGZZHv9a7%2Fi%2BcvsyNfL7APb2b6%2BN0Lvr6XDkkXvqjEfkaN6kHBDmKCz7fRCwexju2ndEE3Y%2F4y2wrQC%2F51lGyRtJ0vg30iJZtOw5HZeXDsEZHlFPn%2BfWWgC9Nxi92iwQX0R%2FA9w90yZA8b1XuJ1YaDUpJkg9wxHQa6I15eQGdfWbr8W2kUIafcongXeXrTjy4aNu6RNZTvwxLg913q5bZ%2BXPEavrvUpZ1X3CSew%2FcnYrrm%2BtU05nvgjoUycSRAXi6%2FhkJ8rEMC1G917fbu4j5WSU0rGauNdaHk%2Bl5ofJW79Pk%2BNV%2FkdYWZAwVgQ%3D%3D',
        },
        {
          Title: '十年的堅持，成就好料理',
          Content: '一個人對生活的品味，就得看對方的廚房擺着多少調味料',
          Picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626259195399.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CA0Y1CNnznS6dwqjTqqk547JNw17rkt9AYyQAq%2Bh%2Bfoanx%2BsFY8O9Ym0xZlOZPsZ3OEaRr7VmMbcw%2BPlYt%2FF490Jx2eBdWQXwsNoy%2FEzN4N7IQBGT3ANA2XbS6fWujsOSoJYlIPi5bMjAiZRjoYvFzb8jgqiQJ0aMfEgMFROCbwl4f9qcfgny07Euk2UK1cRyC85HGeyTGsKaxerxfXT6OWmGTzXj1CezaQ8e1W%2FoyDeCXuSDrGFJINIkdjqKI8TvKCFSszZaf0kB5Pd0wTC55HH8wxc8IbixI1mzl6KkNpr9o6Eldd4%2FKa3uHVeXqzoozhUPHnVznmfY1EhweAFPw%3D%3D',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    scrollNext() {
      window.scrollTo({
        top: this.$refs.kv.offsetHeight,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss">
#kv{
  position: relative;
  color: #ffff;
  .kv_item{
      width: 100%;
      height: 100vh;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    .kv_title{
      text-shadow: 1px 1px 2px rgb(0, 0, 0);
      text-align: center;
      display:block;
      justify-content: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform:translate(-50%,-50%);
      width: 100%;
        .title{
          margin-bottom: 20px;
        }
    }
    }
  .scrol{
  display:flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
  animation: move 1s infinite ease-in-out;;
  span{
    height: 70px;
    width: 1px;
    background-color:#ffffff;
    margin-bottom: 10px;
  }
      cursor: pointer;
      position: absolute;
      left: 50%;
      bottom: 4%;
      transform:translate(-50%,-50%);
      z-index: 5;
      color:#ffffff;
  @keyframes move {
    0% {
            transform: translateY(0%) ;
            }
    30% {
            transform: translateY(20px);
        }

    100% {
        transform: translateY(0%);
    }
  }
}
@media screen and(max-width:480px){
    .kv_item{
       .kv_title{
         width: 80%;
       }
    }
    }
}
</style>
