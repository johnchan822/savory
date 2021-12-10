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
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639156883150.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cXcdbMUIlsOpDLOiQLJOTcdqUUQRaG5BCKqfNRdWd4R6jec4zOfsIADZ8hqTxER%2BXJDISfFDGyMmHWFRqM99S6hb2OCqnLR14SCepUlcQaTkz7jUF5ZG2xjct%2FMsu269w1uskWz2N5tYua9QN7EtYSOhulDv%2FDnN48pe8EEDVYofCGdZcPTyvrlWoLrp64Qy3GuiQ8j7vm%2FdZKOq2VO9UfpSpx6780V3iH%2FYUE0OPjwyQia3X66uWL6MSVovdvPdhctwwtn4MCIrX9l0qWris4CMj5%2FKOs0IAUcwGlxI0U7CojrUFl2HBcj1gxQkjPJF2fpDxnWzq0nPBJGCLDZLpQ%3D%3D',

        },
        {
          isSize: 'NO',
        },
        {
          isSize: 'S',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639156912979.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iwtWwSNByx%2Fdzbp7qzEHHoQd7PbW7wwK8Jddtm%2BZ6n9TVhfuQZ3ImwTJI5oOJ5tClTZ89ZUY%2FI9WOV0W5oOK%2F9TrtsRpzIhz784SSaJQwKfFqUJYHvZzpyXvE4KdVfNhofECx1mGwaOXjLcmbjV7bl5vpY1ovfJ%2FpbUCkd1bxdbWDH1O8MLKGiUJtRLKcY1X4M2KPd5XvIxV2kvtgRbw52pxb%2FmTuiFOMfjkCeyZiQlExgG7xXC32%2BMFBzNWz9Qv371c3RKAiJCPnVFXcasrl7U3qq2CuEYF7a95rEXEuSceaPgNJVaozOEu%2FSvnLFkNA0GFjF1Vgc3K5dAuIU8l5Q%3D%3D',
        },
        {
          isSize: 'S2',

          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639156930131.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ptoepNuEp%2FsJ2oUTIXT4n8cRi%2FERSmbvRIqQaPbKZypSCLJTDQEyO9eObXvBrN%2FD%2FgM6NGcZVs9XQhLYBziJkzuQTSHpcsDfm%2BOIuwNXzb3Hw%2FMKtMyxP60hnD6EIHvqygAoabAU7hJEzwun7UXwGJ1JnoZv%2BKDf0DgEz%2FhESe%2B7XF7An8vGvtWrRxNHfghbgGtkqFRbQHwh0xD1%2B%2FmAqrJjzV9Xsx6kUO4Qrg6Zo8y8a7V7dXCINS9A8FVnXzSwN8PEh%2F9vRaZ08F1lETIb%2B%2FBWDyScebwjjXq2O%2BJGlqXTh%2BWMIjvUUTahU8sq7iU1b2ogjq2Vt8L4n4SXUJHneA%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639156955393.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DB%2FivM39ReKpaUpGf6picbXVrrbjtaayc7HidnMg59PsDGSiGJER4GtdfrQ%2FjGPGGLIV01IivHFSUGPzRM4gNIYudpLe%2FeF1H%2FdqrZ7tc4CSX%2BelmfcIVxb2sif55026IyzNpV4soex23aB6VFerBj5VYeAU%2FYLS5X%2Bh1yfx6%2Fd%2BnGHqiilcms6Ejsh368PgWlUXyEvW0MMBh2X5dhBRQFA%2BIf5KmhPwz6TF64L%2B5xLHIq9CN1aC34UJn87k5a7xAgRAuyQ90bRbRO%2FQK2Kb0rZA7%2FabFA5%2BDeId%2FCZs%2Bp21pem5O0M0Kz6wOEbOQRpYYmjRaJZcavSOAsZWRFYmtw%3D%3D',
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
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639157014150.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=W2XVs47UosIPqIZ4yvgcJKPOR4YuXI%2BtUl5SLzmVnTpW%2BujkFe7OyEjaIJow%2Fs2X%2FsW79B5YLZ85uLX3uyWDtQ9NPEoQkk%2FRVAYvzzrnyza1TUFfVET98BH07eDciHHLDEf8ZsD%2FRsgjRww5Sad%2BPkKIwmbPeO%2B6WJCF8%2FRdjtlNiOgfpGJAkSu7D9%2B14ErGVo6n%2BfAYgnbQxrIRooP7SxKnimnFNbM%2F5kp31Z7Hhmug1YcrN31vZII2MZM2%2Fz2X%2BUdcc%2BlVMKhoZh9nI4SoM79of%2B0wEH0vyMmdvVvwJPkTDcHKUheyHATQU32E2VoW4V8YYluZvelm6%2B%2Ff7jFjEg%3D%3D',
        },
        {
          isSize: 'L',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639157037751.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H2%2FzsKr4pXlXOWA%2BpmeviXo6LhkA17YsBxZaxfC10tT0qrRst5GUAIKM3oINc8WDOlS%2FN80c64Fz33wFL2pbiU%2BtjARdB8BKAJHNN0XYNkMK6H1KBQb%2B3WpeiZ%2FwdREZXgbRmBYyLCS%2FTayfdWX1MbBvoDhb07ZtaEjpD14lBXxS9JEUhsC5SziG6tY73auITxb2t%2BiC%2F5jdFqHaGFL9tqNkJ1r%2F7lH5HqstZ5XxKyEAY0p5mK4tRGgM34QKeENIqt%2BxmePSk7yOT5mg5maV47s5PAfBtcQfDksiaOXFQYj03POY8kKRwQY4uMiEMKhlwbjr%2BGRr5P5O0fyKYANNPA%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639157061866.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qolHRPzV79APuvv1MduYuhyoEErQ2v97C7Gc1ZMqQoOuSUqv7gFWGc9wQ844RljVfuX7Sg565ZmX4TULKq31xntUqM5YuKj7xmUB1WSJchKruBsBFBCeFsBSUAmuHdCO5aWFUXemCwQidH4XPOAEt2GwvNeMRiXallpX2%2FFxpSQfw3p%2BYg90REWI5jZdm0rL8jb6mTXMfifoPISWilUkBu91uFfXByOGgBq5U%2FOhFUqz91lQJ7fokhJAn%2BjoDfj2dvZd%2B9aM266KQVRMPBYqyCOShiX2LpJv9TwDJa89FBSVPVwRw1VBHLbIzy49Wc%2BN9iqA1oppnqPnL0wUXtR%2BRg%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639157079753.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GT1iFnmK2sQPmgpV3eqUrDIBYcEv10xXxSwbujvwgaeyeGdyTXEtZQahk6ekPQjWHZZGnY3X01Ad%2FgLwpxRESXmCKf%2BJi0HOQQiPn8GziFHHL9Q%2Byl%2BlD5QI5ESlexHEcSjI%2BJgyz2fvY77o9%2FXUdXFARVnk%2BupOjqSs6XU4JH7Vi%2BRHArBZjbvqwBbmxU2N2NrwnDme0M%2Fv3aL%2BrFCviD7cvFVruADFw%2FtLV7MgZLI8FEkJQxq3Ifuccq%2BTOaGl3Zu2oAgRpxS0dSX8pEK86KbtJE%2BCs0YQOXRdJVR4g3mzOh%2F5nxsh7Hqv8aIQJGMhMm9lDQnUqvn3hF6hsXxzmQ%3D%3D',
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
