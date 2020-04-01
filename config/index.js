npm install axios
import Axios from  'axios'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/fouban_api'
proxyTable:{
    '/douban_api':{
        target:'http://api.douban.com',//目标结构域名
        pathRewrite:{
            '^/douban_api':''//重写接口
        },
        changeOrigin:true,//是否跨域
    }
}

mounted(){
    const url = this.HOST+'/v2/movie/top250';
    this.$axios.get(url).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}

// 跨域解决方案
// 1.服务端设置跨域
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:conten-type');
header('Access-Control-Request-Method:GET,POST');

// 2.可以设置一个代理服务器，使用proxyTable。首先config/index.js里面找到proxyTable:{},加入
'/api':{
    target:'http://192.168.3.6:7777',
    changeOrigin:true,
    pathRewrite:{
        '^/api':''
    }
}
/**
 * 注意这里面 /api是自己定义的，
 * target 设置调用的接口域名和端口号
 * '/^api'代替target里面的地址，后面组件中可以用api代替
 * 然后我们可以在main.js 设置基础路径，就可以不用写api了
 * main.js->axios.defaults.baseURL = '/api';
 * 
 * 
 * 此种跨域只适合测试开发阶段，项目正式上线并不实用，需要后端去处理跨域问题
 */

//  axios 全局配置
axios.defaults.timeout = 5000;
Vue.prototype.$http = axios;
axios.defaults.baseURL='/api';
// 配置完要记得重启项目


// 为什么产生跨域问题
/**
 * 浏览器限制
 * 跨域（域名，端口不一样都是跨域）
 * XHR（XMLHttpRequest）
 * 同时满足三个条件才有可能产生跨域问题
 */