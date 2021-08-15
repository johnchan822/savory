<template>
<Loading :active="isLoading"></Loading>
  <div id="product">
    <div class="section_banner" :style="{backgroundImage:`url(${product.imageUrl})`}">
      <div class="w1400">
        <h1 class="title">{{product.title}}</h1>
      </div>
    </div>
    <div class="w1400 inner">
      <div class="bread">
      <router-link  to='/'>首頁 /</router-link>
      <router-link
      :to="`/products/${product.category}`">{{product.category}} / </router-link>
      <router-link
      :to="`/product/${product.id}`">{{product.title}}  </router-link>
      </div>
        <div class="product_item">
              <div class="img"  :style="{backgroundImage:`url(${product.imageUrl})`}"></div>
            <div class="content">
                <p class="tag">{{product.category}}</p>
                <h5 class="title">{{product.title}}</h5>
                <h5  class="price">NT${{$filters.currency(product.price)}}</h5>
                <div class="buy">
                  <div class="counter">
                      <button  class="less">
                        <i class="bi bi-dash-lg" @click="less" ></i>
                      </button>
                      <input type="number"  min='1' readonly="readonly" v-model.number="counter">
                      <button type="button"
                      class="add" @click= "add">
                        <i class="bi bi-plus-lg"></i>
                      </button>
                  </div>
                  <button class='main_btn'><div class="bi bi-cart"
                  @click="addToCart">加入購物車</div><span></span></button>
                </div>
                <div class="description">
                  <div class="item">
                    <h6>產品介紹</h6>
                    <p>{{product.description}}</p>
                  </div>
                  <div class="item">
                  <h6>產品成分</h6>
                  <p>{{product.content}}</p>
                  </div>
                </div>
            </div>
        </div>

        <div class="other">
          <h6 class="title">您可能會加點...</h6>
          <swiper :spaceBetween="30" :loop="true"
            :autoplay='{
              "delay": 4000,
              "disableOnInteraction": false
                    }'
            :slidesPerView="3"
            :navigation="true"
            :breakpoints='{
                "200": {
                "slidesPerView": 1,
                "slidesPerGroup": 2
              },
                "350": {
                "slidesPerView": 1,
                "slidesPerGroup": 2
              },
              "768": {
                "slidesPerView": 4,
                "slidesPerGroup": 4
              },
              }'
                class="other_swiper">
                <swiper-slide v-for="(item, index) in products" :key="index">
                  <router-link :to='`${item.id}`' @click='reset'>
                <div class="scale">
                <div class="other_item" :style="{backgroundImage:`url(${item.imageUrl})`}">
                  <h6 class="other_title">
                      {{item.title}}
                  </h6>
                  </div>
                </div>
                  </router-link>
              </swiper-slide>
        </swiper>
        </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {
  Autoplay, EffectFade,
} from 'swiper/core';
import emitter from '@/assets/javascript/emitter';

SwiperCore.use([Autoplay, EffectFade]);

export default {
  data() {
    return {
      product: {},
      products: [],
      counter: 1,
      isLoading: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        this.product = res.data.product;
        this.isLoading = false;
      });
    },
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.products = res.data.products;
        this.removeItem();
        this.isLoading = false;
      });
    },
    less() {
      this.counter -= 1;
      if (this.counter < 1) {
        this.counter = 1;
      }
    },
    add() {
      this.counter += 1;
    },
    addToCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const { id } = this.$route.params;
      const cart = {
        product_id: id,
        qty: this.counter,
      };
      this.$http.post(url, { data: cart })
        .then((res) => {
          if (res.data.success === true) {
            emitter.emit('update-cart');
            this.isLoading = false;
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
    removeItem() {
      const { id } = this.$route.params;
      this.products.forEach((item, index) => {
        if (item.id === id) {
          this.products.splice(index, 1);
        }
      });
    },
    reset() {
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
    },
  },
  mounted() {
    this.getProduct();
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import '@/assets/stylesheets/public';
  #product{
    position: relative;
    .inner{
      .bread{
        margin: 4% 0;
      }
        .product_item{
          margin: 2% 0;
          background-color: #a5a5a52d;
          display: flex;
          width: 100%;
          .img{
              padding-bottom: 40%;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              width: 50%;
          }
          .content{
            position: relative;
            padding: 50px;
            width: 50%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          .title{
            margin-top:2% ;
            margin-bottom: 5%;
          }
          .price{
            margin: 2% 0;
          }
          .buy{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            .counter{
              width: 50%;
              .add,.del{
                padding: 10px;
                border: 1px solid $color-main;
                transition: .3s;
                &:hover{
                    background: $color-main;
                    transition: .3s;
                    color:#fff;
                }
              }
              .add{
                border-left-style: none;
              }
              .del{
                  border-right-style: none;
              }
              input{
                text-align: center;
                width: 40%;
                padding: 10px;
                border: 1px solid $color-main;
              }
            }
          }
      .description{
            margin: 5% 0;
            .item{
              margin:5px 0;
            h6{
              padding: 10px 0 10px 0;
              border-bottom: 1px solid  $color-main;
              }
            p{
              margin: 10px 0 10px 0;
            }
            }
          }
          }
      }
    }
  .other{
    a{
      display: block;
    }
    margin: 8% 0 ;
    .title{
      padding: 20px 0 20px;
      // margin-bottom: 20px;
    }
    .scale{
      overflow: hidden;
    }
    .other_swiper{
      padding: 20px 0;
      border-bottom: 1px solid $color-main;
      border-top: 1px solid $color-main;
    }
    .other_item{
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
    @media screen and(min-width:600px) {
      &:hover{
        transition: .3s;
        transform: scale(1.2);
        &::before{
            transition: .3s;
            opacity: 0
      }
        }
    }
        position: relative;
        width: 100%;
        padding-bottom: 90%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    .other_title{
      color: #fff;
      text-shadow: 1px 1px 2px rgb(0, 0, 0);
      text-align: center;
      display:block;
      justify-content: center;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      transform:translate(-50%,-50%);
        }
      }
    }
    @media screen and(max-width:1440px) {
      .inner{
          .product_item{
              .img{
              padding-bottom: 20%;
          }
          .content{
            position: relative;
            padding: 50px;
            .description{
              margin:1% 0;
            }
          }
      }
     }
    }
    @media screen and(max-width:1280px) {
      .inner{
          .product_item{
              .buy{
                  .counter{
                    margin:5% 0%;
                    width:100%;
                    input{
                      width: 50%;
                    }
                  }
              }
          }
      }
    }
    @media screen and(max-width:1024px) {
      .inner{
          .product_item{
            display: flex;
            flex-wrap: wrap;
            .img{
              width: 100%;
              padding-bottom: 70%;
            }
            .content{
              padding: 16px;
              width: 100%;
              .buy{
                  .counter{
                    margin:5% 0%;
                    width:100%;
                    input{
                      width: 50%;
                    }
                  }
              }
            }
          }
      }
    }
  }
</style>
