<template>
  <div id="v-header">
    <header class="bar bar-nav">
      <a class="icon icon-left pull-left"></a>
      <a class="icon icon-settings pull-right"></a>
    </header>
  </div>
</template>

<script>
  export default {
    mounted(){

    },
    data () {
      return {
        msg: 'herder'
      }
    },
    methods : {
      demo () {
        console.log('demo fun')
      }
    }
  }
</script>


<style scoped>
  .bar{
   background-color: rgba(0,0,0,0)!important;
  }
  .bar .icon{
    font-weight: 600;
    color: #ffffff;
  }
  .bar:after{
    background-color: transparent;
  }
  header.bar.bar-nav {
    padding: 8px 16px;
  }
</style>

