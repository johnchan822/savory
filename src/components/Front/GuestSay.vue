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
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626579499729.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a8SvydaRyF%2FZKu6eS5BJvyTCS1CbHNpXj23t3qCHgn%2BP5KN%2F5386WqktA%2B%2BQnaKWeredsuObfGqa6AXwKn3jDHm7UGSgsgHTIAU%2FlMzOO4HTDEUkFL7R6UuD6oSdn%2Bg%2BXcqQqBmvs0%2Bjwqw09oFxtvlPO%2BIisz5ZqZjaSj%2BsvhIX3iDOfyu%2BaA06Xvh%2FZWz0%2Bkm1IReO1CwADgu%2Fx%2BGniFNwq%2BhHsVbY19rROipOlwcCvC5Ir0xRNENqlg2muHM%2Ba1fVzVTtRt%2FHFF0yOWjkE5DWHlliF5pu7oe1J%2FzrCJ1iKkYdFfICJDk0U0jlQa9ytNejGocFwMF%2F71YJqfxVDQ%3D%3D',

        },
        {
          isSize: 'NO',
        },
        {
          isSize: 'S',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625455222354.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NdopEfB07mUOQup2m8NZ9aGS5655NLvfoqS%2FZVsB5yEovjHjnY9%2FB4OU4PWtQG4GFRgK7kggkWfK%2FMSAACzXz8fl%2FURowW2rZCq9%2F4sfDv%2FpHeKU0hR3MiU5mm3cPBfqPg6EfIUwGzOqP7WxMusaqmpCf1IviPNdBU%2FdtzeoUVmnBS7abXehallduS069Ishv773%2FkbLk9Davqif7gxb3RlzqkV8ahRuRtvndQHpAvsCre6HLHXgK30fcWUWxswZXb6hoUjamlBdc8dy0eLwUEUBJ8y2Ir8ZBw%2FJroZprW3mG99CGAG0XYBr7Z7jo3fX9kKyAKVvrvnudYT2hewb9w%3D%3D',
        },
        {
          isSize: 'S2',

          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625455726996.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GJScsJwB5N3Frz2EZKzq%2B4KcXX4dtU%2FkqHwAye%2BfMcjjVTZenwGOw%2FQjf8EB38%2B2RMNXqCjYUSJPCahNcet%2Bl0913yakMYT0GJV9ls4tYYF6D9z2xlrYMdnkzJkENnhlvYP4MQ1se3ABEvAZvfXwPtnKgqHpzVah11WobLYISoxQxGQl48t6mqWhyuplcptALsXLY7PFjYbVqkw4SrSPtaMdbR%2FD8IlddGOWfX9K4PzAGufMJJA%2B6DHQ9KqW8gzMNTsf%2Fc6GMy7xyW7NS2ACoFfY0UMIHZc%2FzF3SOom82h8kL7TPG92bn6Yb1syoU27CMsY0n4Oo89EIAlGzrz7aAw%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625455151618.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BHhd%2Fdo4QkMCOqzIN73jOhNGy1zNWWfOOZnM3SUWmQgrXkuZOi%2BiT78%2BpdCjxv4vFn2zjBbTBP%2BkcOAJfI7PThPBceFlHIUOdpVToz8gG7E%2Fghj7gP%2FSMjAj2ffI3kjvwKO5DNKisCSyAwFOvWEp04EAREg%2FT0R9tVg2kVAXRGdACi55GD6H95FBGq3vAuI%2F%2FSJdWqKukQre5hTcQGQXHE4t%2FN79DwM53ApwX3eOibHAlh7j8ouLKersnJaHX39skktRo6IieezHyHQbICt%2BL807utwwKvVlC6Aji1iWmKz2WT%2FD6nBnRK5sWFom9Y19Wzo6E%2BQZ%2FvpVNDACcDsDDA%3D%3D',
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
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625455982556.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VXSYYjbOvEukKw4VgwKzIZWAq60El5J3Ou%2BBvdiNQYiFqGITrOcwYh0erOtIvgfLv6bXy9455gIiDGH6fTvOTKAoyPu0eUuKmwgbYlVdxa2GBRsfM%2FBRW31nwP8Zsa7zHHr1CvpO7fmmqNXF1W%2BnuU2U3z0LntQYdtTug8ibA3mjxh4FOoasjoAZH8veqv4jWbfGF0KqB3PTa08%2BxVOZbFLurF174UyU5oYKcQg89lM62zQ%2F2q0FGrY7R1Bmw%2B4L%2FrMK5Xzl5jIUkeFVszsbJc5%2BSAgCr6TiARRdvpKB2Rzhw%2F3VJhb2Zf3t37nfmFoffZZE%2Fd%2F7XgFjrSKwVGxnuQ%3D%3D',
        },
        {
          isSize: 'L',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625456164456.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TCGuRobRgvNRIwZgF7asB7VBxvifEmM3vWYYFjb7OOQlbFzLthUGYu8cVvNKG77LGYRU7n2EUdAYAUZ3mgeEvVVVle5BXM7%2B3aQfMJJC%2FdhmxqvfphrVq1%2BwpAMsWspzF16PqXcyu6PfeUzYZbvbmsLZTYnd21Pj7v43cQlI4nXCHtBcnwHuKz2Jr%2BFEmKrG0fHm46sg7hOnve91fjYY%2B0y4lEwf5G42bAAlK3nkkm7hOrzZvx2CFy0tri1o4GEsqwANA2Pyn5ivbxE6RdNY%2Fms6Z2LHCPdpCZmoSyH0466Inwh49KF4F%2Fn5j%2B2814HZdsivnTEp5ijQTxINAG5Dqw%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625456084822.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=i9UC9QtdWIkXA%2F1bB1gl275HE3wXCUO0uRKOMlIL29L6bnUixuPmKSTZzDIRtcernk4YRGb1a4ghOGFrC3SZA0rXjSZ2G3Uloy9%2BF%2BVaumgB8o2oeLIENzIDFxVteTUwJZR40ZBEZ0p1g%2F3NBZLXAXVZovTN70fBd6cxJdDm%2FGp8VIbOYA2DlCdm%2Fup6VKShCWc9rp%2BBueKxoBJNCsd4hnZ3w7vrd6SsZGOOI9oDuGtWGeBLbzrBhT5hKHYSczNdU345JOtc9dOR5rZa4Bct3SuE3uueQV7xwAdjOK0OIeKBittneHUA1UdA%2FHOn0mRwUgPgu%2BmjIaBh%2FZsD7M2vvg%3D%3D',
        },
        {
          isSize: 'S2',
          picture: 'https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625456498859.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KQaWZ70eT%2BAySagB9SABrQDOg%2BluE4Jav%2FcvPaNuw16aPSVryYEyxvK7ei%2F2UDY8Gun9wg8eqhKf888Fi4PyQTh58C7sCpaaXlOnGXaes1DApUog%2BnazshLxABlvG9LGp8ckzeP1w%2Fr6xSDy8ToYArkhTH0PQaulnF4UV5%2BjQHHo5089XMN1eTS8ZpmCrizT9TOpsdAr%2BBUg4S9H9R2aUrWbqvDbHLNWJF9ARnI%2B%2BheJQ4Qbi0VGRebUK%2F9mVzpNWSuHwwZGPmod4YsLxfuqh94sPe4ktrvxMah07EykZEatkG7y7o3Wa%2FuYrmwSdyadeRAnwVEa7cZzTHJ5%2B5a%2BAA%3D%3D',
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
