<template>
  <section id="footer">
    <div class="inner w1600">
      <div class="top_footer">
      <h3 class="logo">
        Savory
      </h3>
        <ul class="list">
        <li>  <router-link  to='/aboutus'>關於我們</router-link></li>
        <li><router-link  to='/products/全部'>選擇餐點</router-link></li>
        </ul>
      </div>
      <div class="bottom_footer">
          <div class="left">
                Copyright © 單純學術使用，非商業用途</div>
          <div class="right">*Best viewed with Chrome / Firefox</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    hamOpen() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
@import '@/assets/stylesheets/main';
#footer{
  background-color: $color-main;
  color: #fff;
  padding: 40px 0;
  .top_footer{
      display: flex;
      align-content: center;
      justify-content: space-between;
    .logo{
        font-family: 'Yellowtail', cursive;
        align-items: center;
        display: flex;
        color: #fff;
    }
    .list{
      display: flex;
      align-items: center;
      li{
        margin: 0 10px;
      }
    }
  }
  .bottom_footer{
    margin: 30px 0px 20px;
    border-top: 1px solid #F7F9FC;
      display: flex;
      align-content: center;
      justify-content: space-between;
      padding: 30px 0px 10px;
      flex-wrap: wrap;
    .left{}
    .right{}
  }
@media screen and(max-width:1024px) {
}
}
</style>
