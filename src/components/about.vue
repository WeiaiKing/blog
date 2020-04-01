<template>
  <div class="works">
    <div class="header-info">
      <div class="info">
        <img src="https://picsum.photos/500/600" alt />
        <div>
          <div>SHOW</div>
          <div>INFORMATION</div>
          <div></div>
          <div>
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
            <img src="https://picsum.photos/100/100" style="width:100px;height:100px"/>
          </div>
          <el-divider></el-divider>
          <div >自我评价:</div>
          <div>具有强烈的时间观念和交付意识，拥有良好的代码习惯，逻辑结构清晰，命名规范</div>
          <div>有比较强的动手能力，擅长调试代码，有很好的分析问题与解决问题的能力</div>
        </div>
      </div>
      <div></div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style  scoped>
.header-info .info {
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  background: #e6e6e6;
  padding: 5% 0;
}
.info img {
  width: 480px;
  height: 570px;
}
.info > div {
  height: 570px;
  width: 330px;
  background: #fff;
  display: -webkit-flex;
  flex-direction: column;
  padding: 0 60px;
  justify-content: center;
   font-size: 0.8rem;
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
 
  
}
.info > div > div:nth-child(4)  {
  display: -webkit-flex;
  align-items: center;
}
.info > div > div:nth-child(5) {
  color: #999;
}
.info > div > div:nth-child(5) {
  color: #999;
}
.info > div > div:nth-child(7) {
 margin:10px 0 ;
}
</style>