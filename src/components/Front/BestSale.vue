<template>
  <section id="sales">
        <div class="w1400 inner">
          <h2 class="section_title">主廚精選</h2>
        <div class="web_size">
          <div class="col50">
          <template  v-for="(item, index) in filterItem" :key="index">
          <router-link  :to="`/product/${item.id}`"
          class="sales_item xl_size" v-if="item.level == '1'"
            :style="{backgroundImage:`url(${item.imageUrl})`}">
                  <h6 class="ranking">No.{{item.level}} </h6>
                <div class="content">
                  <h4 class="title">{{item.title}}</h4>
                    <p>{{ item.description}}</p></div>
                  <h6 class="more">了解更多</h6>
          </router-link>
          </template>
          </div>
          <div class="col50">
              <div class="col50">
            <template  v-for="(item, index) in filterItem" :key="index">
              <router-link  :to="`/product/${item.id}`"
                class="sales_item"
                v-if="item.level == '2'"
                :style="{backgroundImage:`url(${item.imageUrl})`}">
                        <h6 class="ranking">No.{{item.level}} </h6>
                <div class="content">
                  <h4 class="title">{{item.title}}</h4>
                    </div>
                  <h6 class="more">了解更多</h6>
                  </router-link>
            </template>
            <template  v-for="(item, index) in filterItem" :key="index">
              <router-link  :to="`/product/${item.id}`"
                class="sales_item"
                v-if="item.level == '3'"
                :style="{backgroundImage:`url(${item.imageUrl})`}">
                      <h6 class="ranking">No.{{item.level}} </h6>
                <div class="content">
                  <h4 class="title">{{item.title}}</h4>
                    </div>
                  <h6 class="more">了解更多</h6>
                  </router-link>
            </template>
                </div>
            <div class="col50">
            <template  v-for="(item, index) in filterItem" :key="index">
              <router-link  :to="`/product/${item.id}`"
                class="sales_item"
                v-if="item.level == '4'"
                :style="{backgroundImage:`url(${item.imageUrl})`}">
                        <!-- <h4 class="ranking">{{item.level}} </h4> -->
                <div class="content">
                  <h4 class="title">{{item.title}}</h4>
                    </div>
                  <h6 class="more">了解更多</h6>
                  </router-link>
            </template>
            <template  v-for="(item, index) in filterItem" :key="index">
                <router-link  :to="`/product/${item.id}`"
                class="sales_item"
                v-if="item.level == '5'"
                :style="{backgroundImage:`url(${item.imageUrl})`}">
                        <!-- <h4 class="ranking">{{item.level}} </h4> -->
                <div class="content">
                  <h4 class="title">{{item.title}}</h4>
                    </div>
                  <h6 class="more">了解更多</h6>
                  </router-link>
            </template>
                </div>
            </div>
        </div>
      </div>
  <div class="phone_size">
  <swiper :spaceBetween="0"
        :slidesPerView="0"
        :navigation="true"
        :autoplay='{
  "delay": 5000,
  "disableOnInteraction": false
        }'
  :breakpoints='{
    "320": {
    "slidesPerView": 1,
    "slidesPerGroup": 2
  },
    "768": {
    "slidesPerView": 2,
    "slidesPerGroup": 2
  },
  }'
     class="mySwiper">
      <swiper-slide v-for="(item, index) in filterItem" :key="index">
                <div class="phone_sales_item"
                :style="{backgroundImage:`url(${item.imageUrl})`}">
                        <h4 class="ranking">No{{item.level}} </h4>
                          <div class="content">
                    <h4  class="title">{{item.title}}</h4></div>
                      <h6 class="more">了解更多</h6>
                          </div>
              </swiper-slide>
        </swiper>
        </div>
  </section>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {
  Autoplay, Pagination, EffectFade,
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, EffectFade]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['bestSale'],
  data() {
    return {
    };
  },
  computed: {
    filterItem() {
      let sorts = this.bestSale.filter((item) => {
        if (item.level !== undefined && item.level !== '') {
          return item;
        }
        return false;
      });
      // 排序  注意這邊箭頭都需要 return
      sorts = sorts.sort((a, b) => {
        if (a) {
          return a.level > b.level ? 1 : -1;
        }
        return false;
      });
      return sorts;
    },
  },

};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
@import '@/assets/stylesheets/main';
  #sales{
    margin:3% 0 8%;
background: #ffffff;
.section_title{
  margin:5% 0;
}

.phone_size{
  display: none;
}
.web_size{
  a{
    display: flex;
  }
  display:flex;
  justify-items: center;
  align-items: center;
}

.sales_item{
  cursor: pointer;
  z-index: 5;
      &:hover{
      transform: translateY(-10px);
      transition: .2s;
      transition-timing-function: linear;
      .content{
        p{
            opacity: 1;
            transition: .3s;
              }
              }
              .more{
                opacity: 1;
                transition: .3s;
                background: $color-main;
                color: rgb(253, 253, 253);
              }
      }
        transition: .2s;
        margin: 12px 10px;
        position: relative;
        padding-bottom: 90%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        &::before{
          content: "";
          position: absolute;
          background: #0505053a;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .ranking{
            background: $color-main;
            position: absolute;
            color: #ffffff;
            left: 0%;
            top: 0%;
            padding:10px 16px;
            // font-family: 'Yellowtail', cursive;
        }
        .content{
          text-shadow: 1px 1px 2px rgb(0, 0, 0);
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffffff;
          width: 80%;
          text-align: center;
          .title{
            text-align: center;
            width: 100%;
            font-weight: bold;
          }
          p{
            margin-top:20px;
            width: 100%;
            opacity: 0;
          }
        }
        .more{
            transition: .3s;
            position: absolute;
            bottom: 0;
            background: rgb(214, 214, 214);
            width: 100%;
            text-align: center;
            padding: 8px 0;
             opacity: 0;
            h6{
               font-weight: bold;
            }
            &:hover{
                opacity: 1;
                transition: .3s;
                background: $color-main;
                h6{
                color: #ffffff;
               }
            }
        }
}
.xl_size{
   padding-bottom: 92%;
}
@media screen and( max-width:1024px) {
    .web_size{
  display: none;
}
   .phone_size{
  display: block;
    width: 90%;
    margin: auto;
.phone_sales_item{
  cursor: pointer;
        margin: 12px 10px;
        border-radius: 4px;
        position: relative;
        padding-bottom: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        &::before{
          content: "";
          border-radius: 4px;
          position: absolute;
          background: #05050563;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .ranking{
            background: $color-main;
            position: absolute;
            color: #ffffff;
            left: 0%;
            top: 0%;
            padding:10px 16px;
            // font-family: 'Yellowtail', cursive;
        }
        .content{
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffffff;
          .title{
            text-align: center;
            width: 100%;
          }
          p{
            margin-top:20px;
            width: 100%;
            opacity: 0;
          }
        }
        .more{
            transition: .3s;
            position: absolute;
            bottom: 0;
             background: $color-main;
            width: 100%;
            text-align: center;
            padding: 6px 0;
               font-weight: bold;
               color:#ffffff
}

}

}
  }
  }
</style>
