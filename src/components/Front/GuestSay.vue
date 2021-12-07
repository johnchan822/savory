<template>
  <section id="guest">
  <div class="w1800">
    <swiper :spaceBetween="0"
        :autoplay='{
          "delay": 3000,
          "disableOnInteraction": false}'
        :slidesPerView="2"
        :navigation="true"
        :breakpoints='{
            "1024": {
            "slidesPerView": 2,
            "slidesPerGroup": 5
          },
          "200": {
            "slidesPerView": 1,
            "slidesPerGroup": 5
          },
          }'
        class="mySwiper">
      <swiper-slide>
                <template v-for="(item, index) in bestSaleArray" :key="index">
                <div class="l_item bwstyle" v-if='item.isSize =="L"'
                :style="{backgroundImage:`url(${item.picture})`}"></div>
                </template>
                <div class="col50 bwstyle">
                    <template v-for="(item, index) in bestSaleArrayB" :key="index">
                    <div class="s_item text_item" v-if='item.isSize=="NO"'>
                        <div class="text">
                        <p>「忙碌了一天， <br/> 總是沒有時間好好吃一頓。」</p>
                        <div class="key_man"><span></span> <small>─辛苦的工作的人</small></div>
                  </div>
                    </div>
                </template>
                <template v-for="(item, index) in bestSaleArray" :key="index">
                <div class="s_item" v-if='item.isSize =="S"'
                :style="{backgroundImage:`url(${item.picture})`}"></div>
                </template>
                </div>
                <div class="col50 bwstyle">
                <template v-for="(item, index) in bestSaleArray" :key="index">
                <div class="s_item" v-if='item.isSize =="S2"'
                :style="{backgroundImage:`url(${item.picture})`}"></div>
                </template>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="col50">
                <template v-for="(item, index) in bestSaleArrayB" :key="index">
                    <div class="s_item text_item" v-if='item.isSize=="NO"'>
                        <div class="text">
                        <p>「來趟savory <br/> 新鮮、天然、美味」</p>
                        <div class="key_man"><span></span> <small>─ Savory主廚</small></div>
                  </div>
                    </div>
                </template>
                <template v-for="(item, index) in bestSaleArrayB" :key="index">
                <div class="s_item" v-if='item.isSize =="S"'
                :style="{backgroundImage:`url(${item.picture})`}"></div>
                </template>
                </div>
                <div class="col50">
                <template v-for="(item, index) in bestSaleArrayB" :key="index">
                <div class="s_item" v-if='item.isSize =="S2"'
                :style="{backgroundImage:`url(${item.picture})`}"></div>
                </template>
                </div>
                  <template v-for="(item, index) in bestSaleArrayB" :key="index">
                <div class="l_item" v-if='item.isSize =="L"'
                :style="{backgroundImage:`url(${item.picture})`}"></div>
                </template>
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

// eslint-disable-next-line import/no-unresolved

import SwiperCore, {
  Autoplay, Pagination, EffectFade,
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, EffectFade]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      bestSaleArray:
      [
        {
          isSize: 'L',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593022109.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=amC8Q9F3gh6e8QGaW9dJxuTj%2Ba9S3v4ElswxRA7I9QfhEyL4KOGzSLp9HBAnoJ5mq6B8NAncSZBxFsBBmCeNvlcU54B8g5vZvUP3zWhD0Pm3B5Ca3wnG7NKw9U9NeLD6jdesjheBuMkVlmVgZrcnE3uBLknsv3OONY20MmHVBk%2BTl2ruzPvJ1kZ1IPzajTO8lFQNps9x7DSdA1smmk7sxfWYBtXHR7r3LKN9Bq9%2Bu%2FP%2BZ5MB%2FiVEViVWXGUMbnML6m0XRAQ34ANNaqIeL3LnC0hX8fJbY8neoAluYypDdd4Ynd0eA1mFmSxV8kvJBzeYuinBA1Kjji6%2BFIzPZkyW2w%3D%3D',

        },
        {
          isSize: 'NO',
        },
        {
          isSize: 'S',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593056718.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Q8iZ08K2bGDBYh5bpnx8PRmz2PeAvlWWbQrs%2F7P2e8wF2HwHchcfqzamC5ID9jyJRfosMMEA7U%2BtR7hN4gagNI0mctbAx2DF3rh61jmxTKbHmJdkFNJpcGIypyoZo8BnOEzLcXCCos%2FtlxCBBEj1cfkfUBJapni6cCcAHQoe0evAc9LbrYo0aJz%2By2Rt%2FKCzCtsnG0zQBqGDT%2FkVwYNRQjCDcHBxsQYmbRENToQrKNbY9HwJ8MaiMXwKvtcHvfzCKeLKGpRaSKpC9fV13vDehLAi%2F13iK5oss%2F91%2FD8D0Z78Y3ctJWKl07u9jO1bmbNxPeC%2BTsPf25BVw7RvooEtmw%3D%3D',
        },
        {
          isSize: 'S2',

          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593074104.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HGANKjkEkjA5zYE%2BnmCnU%2FJ6J%2FXs%2Fc18yKPheexDKBCCxXndW2mv7hW9o8p1YJod3eud2W%2FR%2FePHUirG7SAV9MV54iSD5WHB8lJFfkCIkiqsO8C%2FLecdXhks7pEJ4JALIp2GEJx6Mj0M8JOy20%2B78FPRUic9qkG74VclqAGWXjkxZiBtId%2FFk%2FO2uUb%2FilS6OoFSvAKeWjDFoX9YlmIJwYs8GyJhh4qPHr%2FFc5dNX6d72mbjnN8DvHQYyyvVE4Q7%2BQ%2Bk22qFZSvQARTgx04f10E6NDJ53nChp5nv8XuNKpzpenFOnKbEvhjc%2BV%2F1Kkw7W1V6xINbZw9m9cHsSZ%2BNfQ%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593092153.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QlwFgRS1PFKrNznOn8hL7reqSHHqjniD3peoh%2BUjHal7Nl%2Bm%2FdViMtMRIU471XpRZDImv7PjbkSeHPdpZ5qIlUCGCkk3MPOaFAO%2FaU6xdLITAHfLO6hkbzkcRLGpa7XqooEDR2Y9noAZGHSTC5yiYAfbp49UHFaVOEZYLHFzknZjrd4Fd76E8H4di14o5rKdQOBBN%2Bi%2BnSBgq2LPyoekxVgiwpGvtGczuyhnVcKsrOZ5OXGmeDI0NvOSDPmuNlKffluRjaxW2g%2BHnF5l%2F59MByqPVFDBZcDU6kQiK8FNyTNIEpS%2B6qLHN4AwZXsosKlPKum8I%2Fh8GJpOyR%2FGQ9OGJw%3D%3D',
        },
      ],
      bestSaleArrayB:
      [
        {
          isSize: 'NO',
          picture: '',
        },
        {
          isSize: 'S',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593487927.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qEL8ZTBjEmyGO8IK0ckrv%2BXrshi2X%2BojH7Y48URu5BEckK0dG%2FgduMCTlv%2FAn1fQxBOuwafR1OTT70w6S7U1LPWQ9RaT0iaFwxJBsn2vm4tcpO8DKenpISI72EByz1m3Ak%2B5CbTVy6x3csQpvZEeU4JsWVkbhSYedRxiUQF8ATSvwRBbwlFb7P3iQ%2BhSuAoJpPyGx8lcJMbXCZqLOEYz4WnuALgPA2p0XqwfSHpajRHbqONk8o8sZ1MLSlW%2BRFGoW5ZQ1HSZfblxLWGJ9QiFk7WZWYNMII6vNJOYTtlgbOOus%2BDL30jZzDMuOZ%2FWoGHzIbhG7N4cBsIsCOkC41V5rg%3D%3D',
        },
        {
          isSize: 'L',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593509161.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=V18tN2jBaO0tXyLNshGi6icoX57EzB1FbeM%2F5z9z08bGrgtSsoG012Uoz%2FN42%2F2owuIAJtFzAvxC2NJrID7U6kk7rv3EQ1q4pl6z8if6dqAVxy0hcfhrp2%2BYZgwVZG3NTeVAahCgbYSCAR%2Bw3inaCRw4D9%2F0gGaMgU4OfP%2BawtN%2Fpsdb5tBHi0Smzs5Pl9pL8cCjAKmbCQyHJroLBNCKITMEF5HDIg6TTJqDb%2FurkvpQMlu9rQwNpucfWWRp2GXApqRqxLOVkx0cvOI%2FiHmlqmojETfYx%2BveCSlIC3n36%2BajMlgGNkKeGlx5FGW5TzIXVxNsJGUIlIlp9qQXWt7jGQ%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593522655.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AjZpD0T9LZoDYSj9tZvLYXxDp7vDE5%2Bo4eVoCQYCGQNyxYru%2FBHLLm00xYmyEa4PiCdHX97UY%2FB2NbA5mA%2BDv4u2rsJqhzYfkn4gIByv0QjkzhS7EN1DzOSXTa7QuVuKCKJ5yJK37LGx3jCPWMPdAeC%2FV0lL%2FRS%2BYUbZJTE3m3k%2FvyWtUNykUXIte5e37dzHbzDbwkc3zGlITW87DTAHVH9CZCRVXzBPHT7UYt5mfSmQEckHvaLdrnbt%2BMSlmfhA6OaUdFZ8a%2BPT469lMLWvh%2BJaxhK8usHkV2dRH5BUtzCUVES1oNebZ%2FZ%2FIPU6lsZ5tIBaBP%2FVSF7e%2BN6webUdMA%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1630593538490.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Va%2FJtAg1xT9uoZMVIMANqYKGffzNtDpX8o7R9jVAJQgrTXmoYO%2FDvmvlMt%2BCeyQySba5oGcwQ1Nzl2ALqWeDK4BCN2dPEstufLs34uZ4YPG3L7R8RBnSu9is6mjymZI%2FD8zlW3TBlcZsAy2rsM88L9cNq8Bb6ESmbThNHUfKNvMIzTwvicUugoDBUoqZsCluRTS69QRKTN%2FKvjyqSwqfiLFdSTA6nsV4wIbbmtQY%2B2fmSe1A69vpX2tNxebtOD%2F2idFoooCU3VtWUG8N6WMvu8vhWG5n2SCK0pPWAtC2AAzJ1eILvRz8CglDnsdfwjXfQx71CEbS%2FCDMzddOLCPbkw%3D%3D',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
@import '@/assets/stylesheets/main';
#guest{
  margin:5% 0;
  .col50{
    margin: 0px;
  }
  .bwstyle{
      filter:grayscale(100%);
  }
.l_item{
        position: relative;
        padding-bottom: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
}
.s_item{
        position: relative;
        padding-bottom: 80%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
}
.text_item{
  background-color: rgba(177, 177, 177, 0.26);
}

.text{
  color:$color-main;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  .key_man{
    margin-left:20px;
  }
}
@media screen and(max-width:480px) {
  margin: 16% 0;
}
  }
</style>
