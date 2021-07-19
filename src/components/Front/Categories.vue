<template>
<section id="categories" ref="categories" >
  <div class="w1400 inner">
    <h2 class="section_title">選擇餐點</h2>
<swiper :spaceBetween="30" :loop="false"
:slidesPerView="1"
:navigation="true"
        :autoplay='{
  "delay": 5000,
  "disableOnInteraction": false
        }'
:breakpoints='{
    "320": {
    "slidesPerView": 1,
    "slidesPerGroup": 1
  },
    "768": {
    "slidesPerView": 2,
    "slidesPerGroup": 2
  },
  "1024": {
    "slidesPerView": 4,
    "slidesPerGroup": 4
  },
  }'
  class="swiper">
      <swiper-slide v-for="(item, index) in categoriesArray" :key="index">
          <router-link :to="`/products/${item.category}`">
                <div class="scale">
                <div class="categories_item" :style="{backgroundImage:`url(${item.img})`}">
                  <h4 class="categories_title">
                      {{item.title}}
                  </h4>
                  </div>
                </div>
              </router-link>
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
  Autoplay, Pagination,
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

export default {
  data() {
    return {
      categoriesArray:
      [
        {
          title: '前菜淺嚐',
          category: '前菜',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626126662877.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NEle4%2B%2Faf0taZO%2FP2wK28nA2f0akG7fn70vSIOzJeylVu8JEebIUptRDkxwPjiFHWJE7fiUCQrSHJubSSeGWUXJLq00EyRH48RAhq1SzCjmziOIiGODpIBDbu%2Fty67DaSO3kqlOAi3fEp0B6vXpoXECcKLLuWwM5psXRuq0S71RmjqjYlzzK0F0ae7GvxU2fKJFMj5huIq3W7gapANvc7hu8es1o26pDUSNbNkZ33ywF49bupr3qRG9A8PVwcxNzdNHsHosamHcntm1cWJq5gycPq4nkGOvlrhn%2BqYra5LRzgZ%2BvKJrCt%2F4m19NHwKU%2FYsRha8cZv7RaPVh%2Blrs3jw%3D%3D',
        },
        {
          title: '主餐必點',
          category: '主餐',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626441043767.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H9gUdI2ymdRxd%2Bx4qfc8pB%2BCPkY4N5Cl7F%2FJSACjYEpfHWJL1GxIre6fZ%2BMIC7aClecRMmVzAnsDvXiHkPMR0jYeQEhybc182S4mTI4pihzzSOS2gMf0%2BD4%2F1Pb91JOaSGpExJSbWoGU9uI7QBBMlMG8PxyshjZb%2Bl5Hcv4XZto%2BryJXzBwCWozkkRTvvIrPLZDsb3dbRmPXqqnnozhcJpjOY0TqmRWDmLw4VGq9NsIG1YlkXb%2BkjsHRQM6A5%2B16SAz2DcZCWTVZaBuUvtsp94nKTDiipfOCRrs3QAvHIvQD2PNT%2Bv%2BYpzNVOK4dYLZIwKQjce8vyyAG52Cqmka26g%3D%3D',
        },
        {
          title: '特調飲品',
          category: '飲品',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626126616617.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nTXQ4C54i1dhSCP7mde6L94CX9hdyyQxn%2BQJ3D2YeJmOX8W3YrQGu0kzh8dZq63gkT0Clf8ETdcMXy5dZpbvrAK0Tti4WsgvUaD%2Fzb20Qg%2FtIqe0W7NI%2BlZBGhUIlNP%2FxLQG8pl2T1pOHixWUHx4zJhGI6tUGMj81kbr4A8qiIbpugSvPC3VnmQf3ovEjQVryAXRaCd03o8rsQawdvN2qOM2V5pUsvgB1U3G63Ve%2F8pOTY8SX%2Br9uxR%2BKf0eF7BLNr125EQXCSbPSkLLCJPhuCj6OZFBldgxrZSj8q9wFpMRGkMgePrCLLZQG567t9U0gGxKODLsxYDnqOmh%2BRcuQQ%3D%3D',
        },
        {
          title: '甜點留胃',
          category: '甜點',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626579875912.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hla5yrU3rOnvTATueV4Elz9aJ%2FwAnTIVgRY5UqnuGhF9AyD6peyaAZioFLP%2B4Tfekx%2Bp6194wa88%2BJwvABMA36gRVKAJLSxpVtj2hae%2FfMq18gljDZ5JH%2BTuDd9j2MJYrQxCkIHQqHqSeyW9FDZG3YOVgC4u9A9sPM7hBec8Ak0Jf8HdAs3xbfMXilun%2BLgDJ%2FShuSo7D8DKcT8r78qUty1yvOCc855axhlRdSBsBTrqbzLGjXd8iyejzWKnI%2BzVY%2BIQgnlSWMkzEv5mPCUW28FZ2qBCaogk84rlf%2BAiUoL9yWKO8Z6GT59PQgNRwXEOvY2AodurVnOniRx28uLULA%3D%3D',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">

#categories{
  background: rgba(161, 161, 161, 0.178);
  padding: 6% 0% 8%;
  color: #fff;
  .scale{
     overflow: hidden;
  }
  // .section_title{
  //   margin-bottom: 10%;
  // }
  a{
    display: block;
  }
  .categories_item{
    box-shadow: 10px 5px 5px black;
    cursor: pointer;
    transition: .3s;
    &::before{
        content: "";
        background-color: rgba(7, 7, 7, 0.541);
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: .3s;
    }
    &:hover{
      transition: .3s;
      transform: scale(1.2);
       &::before{
           transition: .3s;
          opacity: 0
    }
      }
        position: relative;
        width: 100%;
        padding-bottom: 110%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    .categories_title{
      text-shadow: 1px 1px 2px rgb(0, 0, 0);
      text-align: center;
      display:block;
      justify-content: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform:translate(-50%,-50%);
        .title{
          margin-bottom: 20px;
        }
    }
    }
  @media screen and(max-width:768px) {
      padding: 16% 0;
      .section_title{
    margin-bottom: 10%;
  }
  }
}
</style>
