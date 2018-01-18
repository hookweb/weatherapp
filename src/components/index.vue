<template>
   <div class="weather">
      <div class="content_top">
        <h1>{{ weatherData.weather }}</h1>
        <h2>{{ cityData.province }} {{ cityData.city }}</h2>
        <p>{{ weatherData.date | intercept }}</p>
        <img src="../../static/img/logo_e.png" width="100%" alt="">
      </div>
      <div class="content_bottom">
        <ul>
          <li v-for="(weathers,index) in weatherData.completeData">
            <router-link class="Onetime" :to="{name:'Info',params:{id:index}}">
              <span>{{ weathers.date | interceptDate }}</span>
              <span>{{weathers.temperature}}</span>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  mounted (){
    this.$nextTick(function(){
      this.GetUserIpAddress()
    })
  },
  data () {
    return {
      cityData: {},
      weatherData: {
        completeData: [],
        weather: '',
        date: ''
      }
    }
  },
  filters: {
    // 过滤截取实时天气数据
    intercept(val){
      return val.slice(-3,-1)
    },
    interceptDate(val){
      return val.slice(0,2)
    }
  },
  methods : {
    // 获取用户的ip地址
    GetUserIpAddress () {
      this.$http.get(this.$config.GetUserIp)
      .then(success => {
        // 首先从success中获取到ip地址，然后传入 GetUserAdress() 方法
        this.GetUserAdress(success.data.ip)
      })
      .catch( error  => {
        $.toast('请检查你的网络')
      })
    },

    // 获取用户的地理位置
    GetUserAdress (ip) {
      // 通过jsonp发送ajax请求
      this.$http.jsonp(this.$config.GetUserAddress,{
        // 拼接 api接口需要的参数
        params: {
          ak: this.$config.ipConf.ak,
          ip: ip
        }
      })
      .then(success => {
        // 将获取到的数据存入 cityData 中，方便 页面使用
        this.cityData = success.data.content.address_detail
        this.GetWeatherData()
      })
      .catch(error => {
        $.toast('请检查你的网络')
      })
    },

    // 根据之前的步骤，已经获取到了城市名称，下面去获取天气数据
    GetWeatherData(){
      this.$http.jsonp(this.$config.GetWeather,{
        params: {
          location: this.cityData.city,
          output: this.$config.ipConf.output,
          ak: this.$config.ipConf.ak
        }
      }).then(success => {
          let wea = success.data.results[0].weather_data[0]
          // 天气状况
          this.weatherData.weather = wea.weather
          // 实时温度
          this.weatherData.date = wea.date
          this.weatherData.completeData = success.data.results[0].weather_data
      })
      .catch(error => {
        $.toast('请检查你的网络')
      })
    }
  }
}
</script>

<style scoped>
 .weather{
    text-align: center;
    height: 100%;
    overflow: scroll;
  }
  /* .active{
    color: red !important;
  } */

  .content_top{
    padding-top: 80px;
    color: #fff;
    background: -webkit-linear-gradient(#dd4879 , #fdd73f);
    background: -o-linear-gradient(#dd4879 , #fdd73f);
    background: -moz-linear-gradient(#dd4879 , #fdd73f);
    background: linear-gradient(#dd4879 , #fdd73f);
    height: 80%;
    position: relative;
  }
  .content_top h1{
    font-weight: 500;
    margin:5px 0px;
  }
  .content_top h2{
    font-size: 20px;
    font-weight: 400;
  }
  .content_top p{
    font-size: 80px;
    margin-top: 10px;
  }
  .content_top img{
    margin-top: 98px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .content_bottom ul li{
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  .content_bottom ul li a{
    overflow:hidden ;
    display: block;
    margin: 23px 30px;
    text-align: center;
    color: #9a9a9a;
  }
  .content_bottom ul li:first-child a{
    color: #ed5c5c;
  }
  .Onetime span:first-child{
    float: left;
  }
  .Onetime span:last-child{
    float: right;
  }
  .Towtime span:first-child{
    float: left;
  }
  .Towtime span:last-child{
    float: right;
  }
</style>
