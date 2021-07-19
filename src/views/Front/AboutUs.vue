<template>
<Loading :active="isLoading"></Loading>
<section id="about">
    <div class="section_banner" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626583559107.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fnRe2GhGtI%2BKQ4VSRIKjmkiObYwdyv2K7aaKpZ%2B7o9U0n4ybvY4nnb6vyvnWb7witY8szI1ZNg3gnIeA9lWJaC9zgW8iMAWGEqI0LgQEqIf9urx8MfPXeVOu581QPMXhLt9dMOiGS54OB6JmqDBaimPxV2kTtu2%2BG4W5q0Swgjt8x1ye3wA0YJfMvyuqwwytZK8tj%2BsNuwPtdQIh5CqsFjOFQzBvX1H5AbY8MSp2TUucrwtWRW2TSGBNoWym89e3YoM8%2BgGEZDTzdckPN4VSonZly23XTfURZ6Vil9bK5x5kIJgnGb5yYuriyjL4LmQmQ76fpznusXg2ZTTj1R6Zpg%3D%3D)`}">
      <div class="w1400">
          <h1 class="title">關於我們</h1>
      </div>
    </div>
  <div class="inner w1200">
  <div class="card">
    <div class="background" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625817104912.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DZ8KyLlQpSZKNg9OFfFjPylGfcv4VkMXRecuutRgNCH0LeVPuk9ItsrtER80iFAph%2FUje9kZCnCT7ZB0Zf97PWciD3Kwjqyt9mtGNNeGFJScsP8i8liCl4yYftYUNGttlq%2BvmuGMu4bScJn4N51VHTQPeYW021l6ay9Vt%2B8ZmTyl42KLq%2BP5EV637kDvrf2wJ0pPNV9VDkE%2Bp%2BxiTRfzuxXEUNQGGba0ZEN37TYKfYV6O3BrKNvK1GT%2FbJ%2Ft%2FmW0l%2FFLL0zrcWQSD9%2F9Ux0E8VcxPU4b4cv1uXJhSvDXnlnXRAJEKDLoqWjcqoZnIutDIzT%2BMdMrJ5wbjnvNRNx4NA%3D%3D)`}" >
      </div>
      <div class="content">
        <h5 class="title">「對我而言，唯有愛與美食不可辜負」</h5>
        <h6>- Savory Chef</h6>
        <p>創立於2010年的Savory，始於熱愛料理的主廚Mr.Chen，希望能夠更加推廣他所喜歡的料理，不拘各種形式，食材希望能帶給顧客盡量樸實的好味道。<br><br>
          而為了能夠推廣此料理，也推廣了外送服務，但是不因為外送而丟失了品質，希望能讓點餐的每個人都能夠享受如此美好的食物。</p>
          <h4  class="handwrite"> Mr.Chen</h4>
      </div>
    </div>
      <div class="card">
        <div class="background" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625822572222.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mwSRF9QZ2wJs%2F8Y3SawxvBpkRVkrCryqJb8VaGOjQ2TNYfOqCQXiwrc0WNr02Jh1tXe36z3S2LPeLdteiJjTsoUX87OMMUL9j7xg8QLod%2BFUL17CKFrx2bn12FFWe6aYa5bYhO96vvskeFnelXgKWPPqFM6xbU9huvU%2FDkQMkj1oFBk4u3RgB9MpdGfWcemwtR3lJl7u2TaKUwfVG4dz8D2wJRgMVnJx9qFwjM6mOI2x%2BxT8es9o5eFIzto1PMcvzLXREj9%2BtZlnDytKmFzxO5ipb6qESEAJ4e5iDEuHILq5txG4LV2FuREp1m9uNc4%2FyHoBlbCsl%2Fg0QO%2BqubhZ6A%3D%3D`}" >
        </div>
      <div class="content">
        <h5 class="title">「我喜歡料理，那是我的生活」</h5>
        <h6>- Sous Chef</h6>
        <p>創立於2010年的Savory，Mr.Li於2015年加入，他與主廚Mr.Chen的見面始於一場宴會<br><br>
          兩人見面之後一拍即合，對於美食都有所相同卻不同的堅持，於是Mr.Li決定加入Savory與主廚Mr.Chen創造出更多新奇的料理</p>
          <h4  class="handwrite"> Mr.Li</h4>
      </div>
    </div>
    <div class="card">
    <div class="background" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1625826075955.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LKl3vcag1XWTthO8kyGMD1oryXzSpFPTRiJIJxWmfgjeP1prkdFlShviG%2F5OCIOpaRIiHFvoNRUiJ8XLT9SsDtGUbenANCedPNdDQ2H7MPI7BWHWd0CKFnZW4yVSFpHfkEQM%2FBcKMrHragY9M4oymQFlx2k3nFFi2aoIRHJv%2B3NWSeWLtXpZSqIogK5KohX8DZoQlykO0YpP21MbuQ1yWGDZx5R3JUrAfcBh5diAgrxPX0adbDkk9sbEppqtQhtaxtv6BZaumIUCzF8Fnm36bv0a0g%2FwqxGrK5v1h9u%2F1Ug%2BcORtDPRh%2FYJuEnPKLjzwEsTF0EhIF%2BUXV0TPDmR66g%3D%3D)`}" >
      </div>
      <div class="content">
        <h5 class="title">「管理與美食，是一體兩面的」</h5>
        <h6>- Savory manager</h6>
        <p>創立於2010年的Savory，始於我與Mr.chen的一場私人聚餐碰面，我們聊美食，聊生活，聊未來，那時就開始對於Savory餐廳的想像。<br><br>
          終於在台北101的50樓創立了，一路走來，堅持至今，美食的標竿每次都是我們堅持的方向。
        </p>
          <h4  class="handwrite"> Mr.Yang</h4>
      </div>
    </div>
    <router-link  to='/' class="main_btn">回到首頁 <span></span></router-link>
  </div>

</section>
</template>

<script>

export default {

  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    reset() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
@import '@/assets/stylesheets/public';
#about{
  // margin:10% 0;
  .inner{
      margin-top: 10% ;
      margin-bottom: 10% ;
  .card{
      margin: 5% 0;
      position: relative;
      display: flex;
      align-items: stretch;
      flex-wrap:wrap;
      &:nth-child(even){
          .background{
            order: 1;
          }
          .content{
            order:2;
          }
      }
      &:nth-child(odd){
      .background{
        order: 2;
      }
        .content{
          order:1;
        }
      }
  &:hover{
    .background{
        filter:grayscale(0%);
        transition: .3s;
    }
  }
      .background{
        order: 1;
        filter:grayscale(100%);
        padding-bottom: 48%;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 50%;
        transition: .3s;
      }
      .content{
        width: 50%;
          background-color: rgb(236, 236, 236);
          padding: 5%;
        .handwrite{
          font-family: 'Yellowtail', cursive;
          margin: 10px;
          text-align: right;
        }
        .title{
          margin: 30px 0 16px 0;
        }
        p{
          margin: 30px 0;
        }
      }
  }
}

  @media screen and(max-width:1000px) {
    .inner{
      .card{
        text-align: center;
        margin-bottom: 10%;
        &:nth-child(even){
          .background{
            order: 1;
          }
          .content{
            order:2;
          }
      }
      &:nth-child(odd){
      .background{
        order: 1;
      }
        .content{
          order:2;
        }
      }
      flex-wrap: wrap;
      .background{
        width: 100%;
        padding-bottom: 100%;
    }
      .content{
        width: 100%;
      }
    }
  }
}
}
</style>
