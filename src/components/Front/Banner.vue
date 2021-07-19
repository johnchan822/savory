<template>
<section id="banner" :style="{backgroundImage:`url(https://storage.googleapis.com/vue-course-api.appspot.com/johnhexschool/1626441492382.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P1kO2ZA8tcxSGTHkJtHEcQij5DOOdr%2FRtznTrzqta60mtDgQvsd5GJnPUWbiqGUlBjYBmSBPVwpSmgy9j83fgZw4w8pUW4btf1FbVsajZRbZsm5wiB4FOmAtIzWaIWlmDMTgHEZx53Esl5XNJtzEH66VQaS%2BrYoBKRMxR4GDba%2BirG3hFBQEryd%2FACjQR9DoaaI7PBEYv1gMmhSqGDY%2FaRg2PHMpvO4G2dmzo%2F24pHIqmJpA8HL2nVAPxK8tFsaai3xhXzwm4%2BEmGoOCo0jXkiolXQuomoKgos%2F31T0pmJGQFOZghG8lxv5ZESOYUKwVLRGGmvisjmvcZ89Q42W99w%3D%3D)`}" >
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
