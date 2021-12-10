<template>
<section id="index_about">
 <h2 class="section_title">關於我們</h2>
  <div class="inner w1400">
        <div class="background" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639157155931.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gVCdh2PQ3sq94lysKQf63Uj4rtCJcyEsbT7Ef1eHNHzMxaTJNk9vf10GkhQLcnEk9hNamMYv8EmfeRcCL3Ce%2Bm7nQb7Htq8BoFLbj%2BOpCDbPJOBM%2F5Ir8gcp%2BDmiaLJdXdYbz%2BUK7ldwj5G6wXAW9E34j2%2BS1E8fLYWyJTGlUhdIR0ETZ92g6Dn3pdtIK12iF7WLwZi78JHNqUEG4BSEcgkMyCN82vaIkU8LSQ14cAlhsZ4ID9MpPD%2Fb30fyfM5s9ahXBrqE3wxLSZtJvzJSd2gVM2ZEuO%2BDeUD5uvWICM8yvmU0WiN2%2Fpsp03ESwGgzG4Cm%2BNeDurJPnIKliG1Rug%3D%3D)`}" >
        </div>
      <div class="content">
        <h2>Savory</h2>
        <p>如同字面上美味且經典</p>
        <p>採用新鮮無傷害自然生機小農栽種</p>
          <h5>我們相信永續食物乃是一切的根源</h5>
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
