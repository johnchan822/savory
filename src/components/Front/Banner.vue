<template>
<section id="banner" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1639156624727.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jKm4jNjTFenM9q1mXZQSC9BA7dPUbYJwnQpbvcOEiLlO2cRzLsQraLVIULhTmLCW8T%2F286y96fya8MAf2hBJ%2F46Gk4emLv49Hd%2BRsRQ%2BpCbQzf25MKxWRzYP7KxYL9uiaREdYYPfYfV8ktFTl1c6GZ22lSq626SefsK%2F39C55QvgF010Lpp%2Bd7CtTUd%2BCxbb9jsZVeojGgSGBHcOx%2BlLrFmHxCxFBg4eF966f8sswbP6ksSL2suSw47UUh4h1xD0RseFGiV%2FO%2Fi1pJtaTYnAk5sq%2BT0hTkdt8fT4zPbH4Fmpkzc5DHfwbKhJj5CsHrmav9B9ne0QxukRCP9iHzQOZQ%3D%3D)`}" >
        <div class="inner w1400">
          <h3 clas="title"> Savory </h3>
          <p>英文「閒暇」意思，放慢您的步調享受生活的樂趣。</p>
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
#banner{
    position: relative;
    margin: 8% 0;
    padding: 4% 0;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .inner{
       text-shadow: 10px 5px 5px rgba(0, 0, 0, 0.336);
      text-align: center;
        color: #fff;
         font-family: 'Yellowtail',  '微軟正黑體', 'Microsoft JhengHei', sans-serif;
        p{
          z-index: 1;
          margin: 20px;
          text-align: center;
        }
      }
      &::after{
        z-index: 0;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background-color: rgba(0, 0, 0, 0.178);
      }
      @media screen and(max-width:768px) {
         padding: 10% 0;
          background-attachment: scroll;
      }
    }
</style>
