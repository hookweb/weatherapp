<template>
   <div class="info">
      <!--<h2>{{msg}}</h2>-->
     <div class="info-top">
      <!--{{this.$route.params.id}}-->
       <div class="city">安徽省 合肥市</div>
       <p>19&deg;</p>
       <span>天气</span><span>风</span>
     </div>
  </div>
</template>

<script>

export default {
  mounted (){

  },
  data () {
    return{
      msg:"info"
    }
  },

  methods : {}
}
</script>

<style scoped>
  .info{
    height:100%;
    width:100%;
    background: url("./../../static/img/info_background.png") no-repeat;
    background-size: cover;
  }
  .info-top {
    text-align: center;
  }
  .info-top .city{
    padding-top: 100px;
  }

</style>
