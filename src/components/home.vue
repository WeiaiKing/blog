<template>
  <div id="home">
    <div class="info">
      <img src="https://picsum.photos/600/400" alt />
      <div>
        <div>SHOW</div>
        <div>TECHNOLOGY</div>
        <div></div>
        <div>
          <div>
            <span>姓名：</span>
            <span>韦加金</span>
          </div>
          <div>
            <span>生日：</span>
            <span>1999-09-08</span>
          </div>
          <div>
            <span>爱好：</span>
            <span>编程、舞蹈、看书</span>
          </div>
          <div>
            <span>格言：</span>
            <span>每天叫醒你的不是闹钟，而是梦想</span>
          </div>
        </div>
      </div>
    </div>
    <div class="can">
      <div>
        <span>WHAT CAN I DO?</span>
        <div>我能做什么？</div>
      </div>
      <can :img_url="url1" text="WEB 开发"></can>
      <can :img_url="url2" text="H5 移动端 开发"></can>
      <can :img_url="url3" text="WX小程序 开发"></can>
    </div>
    <div class="transition">
      <span>你的努力</span>
      <span>终究不会白费</span>
      <div>
        <div></div>
      </div>
    </div>
    <div class="percentage">
      <div>MY TECHNICAL</div>
      <div>努力提升自己的技术栈</div>
      <div>
        <img src="https://picsum.photos/200" alt />
        <div>
          <div>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
            <div>HTML HTML5</div>
          </div>
          <div>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="70" status="success"></el-progress>
            <div>CSS CSS3</div>
          </div>
          <div>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="70" status="warning"></el-progress>
            <div>JavaScript ES6</div>
          </div>
          <div>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="60" status="exception"></el-progress>
            <div>Bootstrapt JQuery Echarts</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <el-progress type="circle" :percentage="70" :stroke-width="12"></el-progress>
          <div>微信小程序</div>
        </div>
        <div>
          <el-progress type="circle" :percentage="60" color="#5fca71" :stroke-width="12"></el-progress>
          <div>移动端H5</div>
        </div>
        <div>
          <el-progress type="circle" :percentage="65" color="#dda451" :stroke-width="12"></el-progress>
          <div>vue.js</div>
        </div>
      </div>
    </div>
     <!-- <el-divider></el-divider> -->
    <div class="work">
      <div>MY WORK</div>
      <div>我的工作</div>
      <div>
        <img src="../assets/web.png" alt />
        <img src="../assets/wx.png" alt />
        <img src="../assets/h5.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
import can from "@/common/can.vue";
export default {
  name: "home",
  components: {
    can
  },
  data() {
    return {
      url1: require("../assets/can/1.png"),
      url2: require("../assets/can/2.png"),
      url3: require("../assets/can/3.png")
    };
  }
};
</script>
<style  scoped>
#home .info {
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  background: #e6e6e6;
  padding: 5% 0;
}
.info img {
  width: 600px;
  height: 320px;
}
.info > div {
  height: 320px;
  width: 330px;
  background: #fff;
  display: -webkit-flex;
  flex-direction: column;
  padding: 0 60px;
  justify-content: center;
}
.info > div > div:nth-child(1) {
  font-size: 2.5rem;
  font-weight: bold;
}
.info > div > div:nth-child(2) {
  font-size: 2.5rem;
  font-weight: bold;
}
.info > div > div:nth-child(3) {
  height: 5px;
  width: 60px;
  margin: 25px 0;
  background: #000;
}

.info span:nth-child(odd) {
  color: #999;
}
.info > div > div:nth-child(4) div {
  margin-top: 8px;
  font-size: 0.8rem;
}
.can {
  display: -webkit-flex;
  justify-content: center;
  padding: 7% 0;
}
.can span {
  font-size: 1.5rem;
  font-weight: bold;
}
.can > div:nth-child(1) {
  background-image: url("../assets/bgcimg.png");
  margin-right: 180px;
}
.can > div > div {
  font-size: 1.2rem;
}
.transition {
  background-image: url("https://i.picsum.photos/id/635/1920/720.jpg");
  background-repeat: no-repeat;
  background-size: 100% 430px;
  height: 480px;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
}
.transition span {
  writing-mode: tb-rl;
}
.transition span:nth-child(1) {
  font-size: 2rem;
}
.transition span:nth-child(2) {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
}
.transition > div {
  border: 2px solid #000;
  height: 100px;
  width: 30px;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}
.transition > div > div {
  height: 60px;
  width: 2px;
  background: #000;
  position: relative;
}
.transition > div > div::before {
  content: "";
  border-left: 10px solid transparent;
  border-top: 10px solid #000;
  border-right: 10px solid transparent;
  border-bottom: 0px solid transparent;
  position: absolute;
  bottom: -10px;
  left: -9px;
}
.percentage img {
  width: 200px;
  height: 225px;
}
.percentage > div:nth-child(1) {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bold;
}
.percentage > div:nth-child(2) {
  text-align: center;
  margin-bottom: 20px;
}
.percentage > div:nth-child(3) {
  display: -webkit-flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto 30px auto;
}
.percentage > div:nth-child(3) > div {
  width: 50%;
}
.percentage > div:nth-child(3) > div > div {
  margin-bottom: 5px;
}
.percentage > div:nth-child(3) > div > div > div {
  margin-left: 30px;
  margin-top: 5px;
}
.percentage > div:nth-child(4) {
  display: -webkit-flex;
  justify-content: center;

  text-align: center;
}
.percentage > div:nth-child(4) > div {
  margin-right: 60px;
}
.work{
  text-align: center;
  margin-bottom: 60px;
}
.work>div:nth-child(1){
  font-size: 2rem;
  font-weight: bold;
  margin-top: 60px;
}
.work>div:nth-child(2){
  margin: 10px 0 20px 0;
}
.work img {
  width: 120px;
  height: 120px;
  margin-right: 60px;
}
</style>
