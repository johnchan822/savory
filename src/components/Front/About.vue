<template>
<section id="index_about">
 <h2 class="section_title">關於我們</h2>
  <div class="inner w1400">
        <div class="background" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626583559107.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fnRe2GhGtI%2BKQ4VSRIKjmkiObYwdyv2K7aaKpZ%2B7o9U0n4ybvY4nnb6vyvnWb7witY8szI1ZNg3gnIeA9lWJaC9zgW8iMAWGEqI0LgQEqIf9urx8MfPXeVOu581QPMXhLt9dMOiGS54OB6JmqDBaimPxV2kTtu2%2BG4W5q0Swgjt8x1ye3wA0YJfMvyuqwwytZK8tj%2BsNuwPtdQIh5CqsFjOFQzBvX1H5AbY8MSp2TUucrwtWRW2TSGBNoWym89e3YoM8%2BgGEZDTzdckPN4VSonZly23XTfURZ6Vil9bK5x5kIJgnGb5yYuriyjL4LmQmQ76fpznusXg2ZTTj1R6Zpg%3D%3D)`}" >
        </div>
      <div class="content">
        <h2>Savory</h2>
        <p>如同標題般 美味且經典</p>
        <p>為何採用新鮮食物?且美麗有趣?</p>
          <h5>因為我們相信食物乃是一切的根源</h5>
        <router-link to='/aboutus' ><button class="main_btn">了解更多 <span></span>
        </button></router-link>
      </div>
  </div>
</section>
</template>

<script>

export default {

  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
#index_about{
  margin:8% 0;
  .inner{
  position: relative;
      display: flex;
      align-items: stretch;
      flex-wrap:wrap;
  &:hover{
    .background{
           filter:grayscale(0%);
             transition: .3s;
    }
  }
      .background{
        filter:grayscale(100%);
        padding-bottom: 30%;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        // position: absolute;
        // left: 0;
        // top: 0;
        width: 50%;
        transition: .3s;
      }
      .content{
        h2{
          font-family: 'Yellowtail', cursive;
          margin: 10px;
        }
        background-color: rgb(236, 236, 236);
        padding: 5%;
        width: 50%;
        h5{
          margin: 5% 0;
        }
      }
  }

  @media screen and(max-width:768px) {
    margin:  16% 0;
    .inner{
      .background{
        width: 100%;
        padding-bottom: 60%;
    }
      .content{
        width: 100%;
      }

  }
}
}
</style>
