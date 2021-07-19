<template>
<section id="cart">
  <Loading :active="isLoading"></Loading>
    <div class="section_banner" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626626504477.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nXJ1i2gnG81cFuIxkiao33TFUNPo0cWP8AdopAdRAm0nEFEpBi7QCxINmOq77%2BP9ml0%2FprN6sbHsSc3u1a3B2ry6IbddVpnotiIdVTHRwUlEheMue2krC%2FYIxtHEoGPvT0QAtLFMmwe7LiFZ2YtxejD%2Bbhuqw5yVbo5C3QVBPzJ2rfvuOvqnQriQhL%2BcJy4JQE0XllC1f4NGy4W7Os%2F56X65Sz5GKDh35aYcrp%2Fpg8nMjikbICyospx4Qy93dvWJlvFXVn2ZYWh9bZdMq6SDf3p1sxxzDrNktxf9I4XswMvAGIBC5hlzRgDLDgbWbno17vJJXHd1CHkHBglQleGPAg%3D%3D)`}">
      <div class="w1400">
        <h1 class="title">購物結帳</h1>
      </div>
    </div>
    <div class="inner w1200">
        <div class="step_bar">
          <h6 class="step" :class= "{'active' : link === 'first' }">
            <div class="circle">1</div>購物車</h6>
          <h6 class="step" :class= "{'active' : link === 'second' }"
          ><div class="circle">2</div>填寫資料</h6>
          <h6 class="step"  :class= "{'active' : link === 'third' }"
          ><div class="circle">3</div>完成訂單</h6>
            <h6 class="step" :class= "{'active' : link === 'four' }"
            ><div class="circle">4</div>付款成功</h6>
        </div>
        <!-- 表單第一區塊 -->
        <div class="cart_step_first" :class="{'active':link === 'first'}">
        <template v-if="carts.carts !=''">
          <div class="table_overhiden">
          <table class="table">
            <thead>
              <tr>
                <th width="11%"></th>
                <th>品名</th>
                <th width="20%">數量</th>
                <th>單價</th>
                <th>小計</th>
                <th  width="10%"><button class="main_btn" type="button"
                @click="delAllCartData">清空購物車<span></span></button> </th>
              </tr>
            </thead>
            <tbody>
              <template  v-if="carts.carts">
                  <!-- 判斷 購物車內是否有資料 如果沒有不會顯示 -->
                <tr v-for="(cart, key) in carts.carts" :key="cart+key">
                  <td>
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
                    <div>NT${{$filters.currency(cart.product.price) }} </div>
                  </td>
                    <td>
                    <div>NT${{$filters.currency(cart.qty * cart.product.price)}}</div>
                  </td>
                  <td>
                    <button type="button" class="btn  x-btn"
                    @click="delCartData(cart)">
                    <i class="bi bi-x-lg "></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td >總金額</td>
                <td ><h6>NT${{$filters.currency(carts.total)}}</h6></td>
                <td>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
          <div class="flex_right">
                  <button class="main_btn next_btn"
                type="button" @click="link ='second'">
                下一步<span></span></button>
          </div>
        </template>
          <template  v-else>
            <div class="please_buy">
              <h4>未選購商品</h4>
              <router-link class="main_btn" to='/products/全部'>
              <span></span>回到餐點頁選購</router-link>
            </div>
          </template>
    </div>
    <!-- 表單第二區塊 -->
    <div class="cart_step_second"  :class="{'active':link === 'second'}">
          <div class="left_list">
      <h6 class="title">訂單明細</h6>
      <div class="item_scorll">
        <div class="item" v-for ="(cart, key) in carts.carts" :key=cart+key>
            <div class="section">
              <div class="img" :style="{backgroundImage:`url(${cart.product.imageUrl})`}"></div>
                <div class="list_name">
                    <p class="name">{{cart.product.title}}</p>
                    <p>NT${{$filters.currency(cart.product.price)}}</p>
                </div>
            </div>
              <div class='qty' >X {{cart.qty}}</div>
        </div>
      </div>
        <h6 class="coupcode_text" v-if=" carts.total >=  1000">
          消費金額已達NT$1,500元<br><br>
          輸入夏季限時優惠碼 <span style="font-weight:bold">"savory88"</span>即享 88 折 優惠！
        </h6>
        <h6 class="coupcode_text" v-else>
          消費金額滿NT$1,000 即可享 <span style="font-weight:bold">"88折"</span>優惠<br><br>
          目前的消費金額尚差  <span style="color:red">NT${{$filters.currency(1000 - carts.total)}}</span>！
           <router-link  class="main_btn" to='/products/全部'>繼續選購<span></span></router-link>
        </h6>
        <div class="couponcode">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"/>
            <button
              class="coupon_btn"
              type="button"
              @click="addCouponCode">
              套用
            </button>
        </div>
        <div class="total_price">
          <div>小計</div>
          <div>NT${{$filters.currency(carts.total)}}</div>
        </div>
          <div class=" discount" v-if="coupon.final_total || '' ">
            <div>折扣</div>
          <div>NT$ -{{  carts.total - Math.round(coupon.final_total)}}</div>
        </div>
        <h5 class="final_price">
          <div>總金額</div>
          <div v-if ='coupon.final_total'>NT${{ Math.round(coupon.final_total)}}</div>
          <div v-else >NT${{$filters.currency(Math.round(carts.total))}}</div>
        </h5>
        </div>
        <Form v-slot="{ errors }" @submit="onSubmit" ref='form' class="form">
          <h6 class="title">收件人資料</h6>
            <div class="form_block">
                <label for="name">收件人姓名<span style=" color:red ">*</span></label>
                <Field id="name" name="姓名" type="text"
                class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入 姓名" rules="required" v-model="user.name"></Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="form_block">
            <label for="email">電子信箱<span style=" color:red ">*</span></label>
          <Field id="email" name="email" type="email" class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" rules="email|required" v-model="user.email"></Field>
          <error-message name="email" class="invalid-feedback"></error-message>
          </div>
            <div class="form_block">
              <label for="phone">收件人電話<span style=" color:red ">*</span></label>
              <Field id="phone" name="電話" type="tel" class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入 電話" rules="required|min:8" v-model="user.phone"></Field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="form_block">
              <label for="address">收件人地址<span style=" color:red ">*</span></label>
              <Field id="address" name="地址" type="text" class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入 地址" rules="required" v-model="user.address"></Field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
              <div class="form_block">
              <label for="pay">付款方式<span style=" color:red ">*</span></label>
                <Field  id="pay" name="付款" as="select"  class="form-control" rules="required"
                :class="{ 'is-invalid': errors['付款'] }"  v-model="user.payment_method">
                <option value="" selected="selected" disabled="disabled" >請選擇</option>
                <option  value="信用卡">信用卡</option>
                <option value="ATM">ATM</option>
                <option value="WebATM">WebATM</option>
                  <option value="ApplePay">ApplePay</option>
                </Field>
              <error-message name="付款" class="invalid-feedback" ></error-message>
            </div>
              <div class="form_block">
                <label for="message" class="form-label">其他需求</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="10"
                  v-model="user.message"></textarea>
              </div>
        <div class="btn_group">
          <div class="back_btn" @click="link = 'first'"><span></span>回上一頁 </div>
  <button class="main_btn" type="sumbit"
  >確認結帳 <span></span></button>
        </div>
        </Form>
      </div>
        <!-- 表單第三區塊 -->
    <div class="cart_setp_third" :class="{'active':link === 'third'}">
    <form @submit.prevent="payOrder">
      <table class="table">
        <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in order.products" :key="item.id">
            <td> <div class="img"
            :style="{backgroundImage:`url(${item.product.imageUrl})`}"></div></td>
          <td> {{item.product.title}} </td>
          <td>{{ item.qty }}</td>
          <td>NT${{ $filters.currency(item.final_total) }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>總計</td>
          <td>NT${{$filters.currency(Math.round(order.total)) }}</td>
        </tr>
        </tfoot>
      </table>
      <table class="order_table">
        <tbody>
        <tr>
          <th>Email</th>
          <td>{{ order.user.email }}</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td>{{ order.user.name }}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{ order.user.address }}</td>
        </tr>
        <tr>
          <th>其他需求</th>
          <td>{{ order.message }}</td>
        </tr>
          <tr>
          <th>收件人付款方式</th>
          <td>{{ order.user.payment_method }}</td>
        </tr>
        <!-- <tr>
          <th>付款狀態</th>
          <td>
            <span v-if="!order.is_paid">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </td>
        </tr> -->
        </tbody>
      </table>
      <div class="" v-if="order.is_paid === false">
        <h6 class="pay_btn" @click="payOrder(), link = 'four'">確認付款</h6>
      </div>
    </form>
      </div>
        <!-- 表單第四區塊 -->
      <div class="cart_setp_four" :class="{'active':link === 'four'} ">
          <h5>付款成功，感謝你的訂購!</h5>
        <router-link  to='/products/全部' class="main_btn"
         @click="reset">繼續選購 <span></span></router-link>
      </div>
    </div>
</section>
</template>

<script>
import emitter from '@/assets/javascript/emitter';

export default {
  data() {
    return {
      link: 'first',
      carts: {},
      cart: {},
      user: {
        email: '',
        name: '',
        phone: '',
        address: '',
        message: '',
        payment_method: '',
      },
      isNotice: true,
      isLoading: false,
      coupon_code: '',
      coupon: {},
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  methods: {
    getCartData() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.carts = res.data.data;
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
          emitter.emit('update-cart');
        });
    },
    // 刪除全部資料
    delAllCartData() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url)
        .then((res) => {
          console.log(res);
          this.getCartData();
          this.isLoading = false;
          emitter.emit('update-cart');
        });
    },
    // 更新購物車數量內容
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
          console.log(res);
          this.getCartData();
          this.isLoading = false;
        });
    },
    // 使用優惠劵
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(url, { data: { code: this.coupon_code } })
        .then((res) => {
          if (res.data.success === true) {
            console.log(res);
            this.coupon = res.data.data;
            this.getCartData();
            this.$swal.fire({
              icon: 'success',
              title: '以使用優惠劵',
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            this.getCartData();
            this.$swal.fire({
              icon: 'error',
              title: '優惠劵代碼錯誤',
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      this.couponCode = '';
    },
    onSubmit() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(url, {
        data: {
          user: {
            name: this.user.name,
            email: this.user.email,
            tel: this.user.phone,
            address: this.user.address,
            payment_method: this.user.payment_method,

          },
          message: this.user.message,
        },
      })
        .then((res) => {
          this.orderId = res.data.orderId;
          this.getOrder();
          this.$refs.form.resetForm();
          this.isLoading = false;
          this.link = 'third';
          this.user = {
            email: '',
            name: '',
            phone: '',
            address: '',
            message: '',
          };
          this.$swal.fire({
            icon: 'success',
            title: '已完成訂單',
            showConfirmButton: false,
            timer: 2000,
          });
          emitter.emit('update-cart');
        });
    },
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.order = res.data.order;
        this.isLoading = false;
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getOrder();
        }
        this.isLoading = false;
      });
    },
    reset() {
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
    },
  },
  created() {
    this.getCartData();
    emitter.on('update-cartPage', () => {
      this.getCartData();
    });
  },
};
</script>

<style lang="scss">
@import '@/assets/stylesheets/public';
#cart{
  a{
    display: flex;
  }
  .inner{
    margin-top:5%;
    margin-bottom:5%;
    .step_bar{
      display: flex;
      justify-content: center;
      // border-bottom: 6px solid  rgb(241, 241, 241);
      .step{
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 30px;
        text-align: center;
        align-items: center;
        width: 33%;
        border-bottom: 6px solid rgb(241, 241, 241);
        .circle{
          margin-bottom: 10px;
          display: flex;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          height: 26px;
          width: 26px;
          background:$color-main;
          color: #fff;
        }
        &.active{
          border-bottom: 6px solid $color-main;
        }
      }
      @media screen and(max-width:480px) {
        .step{
          padding: 10px 0;
        }
      }
    }
  .cart_step_first{
      margin: 5% 0;
      display: none;
      &.active{
        display: block;
      }
  .table{
    background: rgb(241, 241, 241);
    width: 100%;
    text-align: center;
      .x-btn{
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
          border: 3px solid #fff;
        th{
          padding: 20px 0;
        }
        td{
          padding: 26px 10px;
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
    .flex_right{
      display: flex;
      justify-content: flex-end;
    }
    @media screen  and(max-width: 1024px){
      .table_overhiden{
      overflow-x: auto;
       .table{
    width:1000px;

       }
      }
    }
    .please_buy{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .main_btn{
      margin-top: 5%;
    }
    }
                  }
  .cart_step_second{
      margin: 5% 0;
      padding: 30px 40px;
      background: rgb(243, 243, 243);
      &.active{
        display: flex;
      }
      display: none;
      width: 100%;
      justify-content: space-between;

      .form{
       width: 45%;
       .title{
         margin-bottom: 20px;
       }
       .invalid-feedback{
         color: rgb(233, 4, 4);
         display: block;
      }
      .notice{
        background: red;
      }
        .form_block{
          margin-bottom:20px ;
          label{
           display: block;
           margin-bottom:10px;
          }
        }
        .btn_group{
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .left_list{
        width: 45%;
        // padding: 10px 30px;
        .title{
          margin-bottom:20px ;
        }
        .item_scorll{
          max-height: 400px;
          overflow-y: scroll;
        }
        .item{
          display: flex;
          background: rgb(255, 255, 255);
          align-items: center;
          justify-content: space-between;
          border-bottom: rgb(243, 243, 243) solid 3px;
          .section{
            display: flex;
            align-items: center;
            width: 50%;
            justify-items: center;
          .img{
            margin: 10px;
            width: 40%;
            margin-left: 10px;
            padding-bottom:30%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            }
            .list_name{
              width: 50%;
            }
          }
            .qty{
              width: 16%;
            }
        }
        .coupcode_text{
          margin: 30px  0px;
        }
        .couponcode{
          display: flex;
          justify-content: space-between;
          input{
            max-width: 100%;
          }
          .coupon_btn{
            width: 80px;
            background: $color-main;
            color: #fff;
          }
        }
        .total_price,.discount{
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }
        .discount{
          color: rgb(219, 28, 28);
        }
        .final_price{
          border-top:1px solid $color-main ;
          padding-top: 20px;
          margin: 20px 0;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
        }
      }
      @media screen and(max-width:1024px) {
        flex-wrap: wrap;
        .form{
          width: 100%;
        }
        .left_list{
          width: 100%;
          margin-bottom: 10%;
        }
      }
         @media screen and(max-width:480px) {
            padding: 26px 20px;
        flex-wrap: wrap;
        .form{
          width: 100%;
        }
        .left_list{
          width: 100%;
          margin-bottom: 10%;
          // .couponcode{
          //   input{
          //     width:70%;
          //   }
          // }
        }
      }
    }
  .cart_setp_third{
    margin: 5% 0;
    &.active{
      display: flex;
    }
    display: none;
    form{
      width: 100%;
    }
    .table{
    margin: 5% 0;
    background: rgb(241, 241, 241);
    width: 100%;
    text-align: center;
      tr{
          border: 3px solid #fff;
        th{
          padding: 20px 0;
        }
        td{
          padding: 10px 10px;
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
    .order_table{
      margin: 5% 0;
      background: rgb(241, 241, 241);
      width: 100%;
      tr{
          border: 3px solid #fff;
        th{
          text-align: left;
          padding-left: 5%;
          width: 30%;
        }
        td{
          padding: 20px 10px;
      }
    }
      }
      .pay_btn{
        cursor: pointer;
        &:hover {
          border: 1px solid  $color-main;
          color:rgb(255, 255, 255);
          background: $color-main;
          transition: .3s;
        }
        transition: .3s;
        border: 1px solid  $color-main;
        text-align: center;
        width: 100%;
        padding: 16px;
        background: rgb(255, 255, 255);
        color: $color-main;
      }
  }
  .cart_setp_four{
    margin: 10% 0;
    display: none;
    align-items: center;
    flex-direction: column;
    h5{
      margin:5%;
      font-weight: bold;
    }
    &.active{
        display: flex;
      }
    text-align: center;
  }
  }
}
</style>
