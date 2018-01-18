/**
 * 站点的接口配置，包含3个ajax请求地址
 */
export default {
  // 获取用户ip地址
  GetUserIp: "http://localhost:9090/ip",
  // 获取用户地理位置
  GetUserAddress: "http://api.map.baidu.com/location/ip",
  // 获取天气信息
  GetWeather: "http://api.map.baidu.com/telematics/v3/weather",

  //封装 获取用户地理位置 接口需要的固定参数
  ipConf: {
    ak: "t1fLY5kTo0eegUAqtENfvPzn",
    output: 'json'
  }
};

