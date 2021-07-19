<template>
  <div id="navbar" :class="{'fixed':isFixed, 'other_page':isOtherPage}">
    <div class="inner w1800">
      <router-link to="/">  <h2 class="logo">
        Savory
      </h2></router-link>
        <div class ='bar'>
        <ul class= 'middle_bar' :class="{'active':isActive,
          'fixed':isFixed, 'other_page':isOtherPage}">
            <li>
                <router-link  to='/aboutus' @click='hamOpen()'>關於我們</router-link>
            </li>
              <li>
                <router-link  to='/products/全部' @click='hamOpen()'>選擇餐點</router-link>
            </li>
        </ul>
        <ul class="icon_bar">
              <li>
                <div class="cart" @click="getCartData('open')">
                  <i class="bi bi-cart3"></i>
                  <small class="cart_count" v-if='cartItemCount !== 0'>{{cartItemCount}}</small>
                  </div>
            </li>
            <div class="hamburger  hamburger--3dy"
              type="button" @click="hamOpen">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
            </div>
          </ul>
          </div>
      </div>
      </div>
      <Loading :active="isLoading"></Loading>
    <div class="cart_lightbox" :class="{'active': isCartActive}">
      <div class="black_over" @click="cartClose"></div>
        <div class="box">
          <div class="title">
            <h5>你的購物車</h5>
            <div class="close" @click="cartClose"><i class="bi bi-x-lg"></i></div>
          </div>
          <template v-if = 'cartItemCount >=1'>
          <table class="table">
            <thead>
              <tr>
                <th width="15%" class="m_none"></th>
                <th>品名</th>
                <th width="30%">數量</th>
                <th width="20%">單價</th>
                <th width="5%"><i class="bi bi-x-circle-lg"></i></th>
              </tr>
            </thead>
            <tbody>
              <template  v-if="carts.carts">
                <tr v-for="(cart, key) in carts.carts" :key="cart+key">
                  <td class="m_none">
                    <div class=img :style="{backgroundImage:`url(${cart.product.imageUrl})`}"></div>
                  </td>
                  <td>
                    {{cart.product.title}}
                  </td>
                  <td>
                      <div class="counter">
                      <button  class="less" @click="updateCartData(cart,'less')">
                        <i class="bi bi-dash-lg" ></i>
                      </button>
                      <input type="number"  min='1' readonly="readonly" v-model.number="cart.qty">
                      <button type="button"
                      class="add" @click="updateCartData(cart,'add')">
                        <i class="bi bi-plus-lg"></i>
                      </button>
                  </div>
                  </td>
                    <td>
                    <span>NT${{ $filters.currency(cart.total)}}</span>
                  </td>
                    <td>
                      <button type="button" class="btn  x-btn"
                    @click="delCartData(cart)">  <i class="bi bi-x-lg"></i>
                    </button>
                    </td>
                  <td>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td class="m_none"></td>
                <td></td>
                <td >總計</td>
                <td>NT${{$filters.currency(carts.total)}}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <router-link to="/cart/" class="order" @click="cartClose">訂單結帳</router-link>
          </template>
          <template v-else>
              <h6 class="no_product_title">目前沒有商品</h6>
              <router-link to="/products/全部" class="order" @click="cartClose">選購商品</router-link>
          </template>
        </div>
    </div>
</template>

<script>
import emitter from '@/assets/javascript/emitter';

export default {
  props: ['isOtherPage'],
  data() {
    return {
      isFixed: false,
      isActive: false,
      isCartActive: false,
      carts: {},
      cart: [],
      isLoading: false,
      cartItemCount: 0,
    };
  },
  methods: {
    hamOpen() {
      this.isActive = !this.isActive;
      // document.querySelector('body').classList.toggle('lock');
      console.log(this.isActive);
    },
    // 取得購物車數量內容
    getCartData(status) {
      if (status === 'open') {
        this.isCartActive = true;
        document.querySelector('body').classList.toggle('lock');
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.carts = res.data.data;
          this.cartItemCount = res.data.data.carts.length;
        });
    },
    cartClose() {
      this.isCartActive = false;
      document.querySelector('body').classList.remove('lock');
    },
    updateCartData(cart, status) {
      this.isLoading = true;
      if (status === 'add') {
        this.cart.qty = cart.qty + 1;
      } else if (status === 'less' && cart.qty > 1) {
        this.cart.qty = cart.qty - 1;
      }
      this.isLoading = true;
      const carts = {
        product_id: cart.id,
        qty: this.cart.qty,
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
      this.$http.put(url, { data: carts })
        .then((res) => {
          emitter.emit('update-cartPage');
          console.log(res);
          this.getCartData();
          this.isLoading = false;
        });
    },
    // 刪除單筆資料
    delCartData(cart) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
      this.$http.delete(url)
        .then((res) => {
          console.log(res);
          this.getCartData();
          this.isLoading = false;
        });
    },
    scrollNavbar() {
      const windowScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      if (windowScrollY > windowHeight - 1 && this.$route.name === 'index') {
        this.isFixed = true;
      } else if (windowScrollY <= windowHeight && this.$route.name === 'index') {
        this.isFixed = false;
      }
    },
  },
  created() {
    this.getCartData();
  },
  mounted() {
    window.addEventListener('scroll', this.scrollNavbar);
    emitter.on('update-cart', () => {
      this.getCartData();
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
@import '@/assets/stylesheets/custom/hamburgers';
@import '@/assets/stylesheets/public';

    ::-webkit-scrollbar {
        width: 3px;
        height: 0;
        background: #c7c7c7;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: $color-main;
        margin-right: 20px;
    }

body{
  &.lock{
    overflow: hidden;
  }
}
#navbar{
  color: #fff;
    position: absolute;
    width: 100%;
    z-index: 5;
    transition: .3s;
  &.fixed{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: $color-main;
    transition: .3s;
  }
  &.other_page{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: $color-main;
    transition: .3s;
  }
 .inner{
    display: flex;
    justify-content: space-between;
    align-items:center;
   .logo{
      font-family: 'Yellowtail', cursive;
      align-items: center;
      display: flex;
   }
  .bar{
    display: flex;
    justify-content: space-between;
    li{
      padding: 30px 10px;
        cursor: pointer;
        a{
          width: 100%;
          height: 100%;
        }
    }
   .middle_bar{
      display: flex;
      &.fixed{
          background: $color-main;
      }
      &.other_page{
        background: $color-main;
      }
    }
  .icon_bar{
      display: flex;
      .cart{
        position: relative;
        .cart_count{
      position: absolute;
      top: -12px;
      left: 6px;
      background: rgb(192, 1, 1);
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
        }
      }
    }
   }
 }
    .hamburger{
        display: none;
  }
  @media screen and (max-width:600px) {
    .inner{
      width: 100%;
      .logo{
        margin-left:20px;
      }
    .bar{
    .middle_bar{
        display: block;
        position: fixed;
        width: 100%;
        left: 0;
        text-align: center;
        top:30px;
        opacity: 0;
        padding: 0;
        margin: 0;
        transition: 0.3s;
        z-index: -5;
        visibility: hidden;
          li{
          widows: 100%;
            background: rgba(241, 241, 241, 0.315);
            position: relative;
              &:hover{
                color: rgb(0, 153, 255);
            }
          }
        &.active{
          top: 80px;
          opacity: 1;
          visibility: visible;
        }
          &.other_page{
          background-color: $color-main;
          transition: .3s;
        }
    }
    }
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after{
          background-color: rgb(255, 255, 255);
        }
      .hamburger{
          display: flex;
          align-items: center;
      }

    }
  }

}
.cart_lightbox{
      &.active{
        transition: .5s;
        overflow: hidden;
        .box{
            right: 0px;
        }
        .black_over{
          display: block;
        }
    }
    .black_over{
    background: rgba(10, 10, 10, 0.226);
    width: 100vw;
    height: 100vh;
    position:fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: none;
}
  .box{
    .title{
      text-align: center;
      position: relative;
      margin: 20px;
      .close{
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        color:rgb(136, 136, 136);
      }
    }
    width: 40%;
    z-index: 99;
    padding: 20px;
    background: #fff;
    height: 100vh;
    right: -100%;
    position: fixed;
    top:0;
    z-index: 10;
    transition: .5s;
    .table{
    width: 100%;
    text-align: center;
    display: block;
    max-height: 700px;
    overflow-y: scroll;
    color: rgb(0, 0, 0);
      tbody{
        width: 100%;
      }
      .x-btn{
          padding: 0 10px;
          transition: .3s;
          transform: scale(1);
        }
      :hover{
          &.x-btn{
            transition: .3s;
            transform: scale(1.4);
          }
      }
      tr{
          border-bottom: 1px solid $color-main;
        th{
          padding: 20px 0;
        }
        td{
          padding: 16px 10px;
          .counter{
              width: 100%;
          }
          .img{
            width: 100%;
            margin-left: 10px;
            padding-bottom:100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }
    }
    .order{
      transition: .3s;
      margin-top: 30px;
      cursor: pointer;
      padding: 10px;
      text-align: center;
      background: $color-main;
      opacity: .9;
      color:#fff;
      display: block;
      &:hover{
        transition: .3s;
          opacity: 1;
      }
    }
    .no_product_title{
      text-align: center;
      margin: 5% 0;
    }
  }
  @media screen and (max-width:1440px) {
    .box{
      width: 60%;
       .table{
         max-height:400px;
       }
    }
  }
   @media screen and (max-width:900px) {
    .box{
      width: 70%;
    }
  }
   @media screen and (max-width:600px) {
    .box{
      width: 100%;
    .table{
      tr{
        th{
          padding: 20px 0;
        }
        td{
          padding: 16px 0px;
        .counter{
            width: 100%;
            .add,.less{
              display: none;
              // &:hover{
              //     background: $color-main;
              //     transition: .3s;
              //     color:#fff;
              // }
            }
            .add{
              border-left-style: none;
            }
            .less{
                border-right-style: none;
            }
            input{
              text-align: center;
              width: 40%;
              padding: 0px;
              border: 1px solid #fff;
            }
          }
        }
      }
    }
    }
    .m_none{
      display: none;
    }
  }
}
</style>
