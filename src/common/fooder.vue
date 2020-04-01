<template>
  <div id="fooder">
    <div class="fooder">
      <div>
        <img src="../assets/fooder/wx.png" alt />
        <div>
          <span>微信</span>
          <span>/</span>
          <span>wechat</span>
          <div>
              weiai1192620781
          </div>
        </div>
      </div>
      <div>
        <img src="../assets/fooder/qq.png" alt />
        <div>
          <span>QQ</span>
          <span>/</span>
          <span>QQ number</span>
          <div>1192620781</div>
        </div>
      </div>
      <div>
        <img src="../assets/fooder/E-mail.png" alt />
        <div>
          <span>邮箱</span>
          <span>/</span>
          <span>E-mail</span>
          <div>1192620781@qq.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fooder"
};
</script>

<style scoped>
#fooder{
  background: #000000;
  color: #fff;
  padding: 0 15%;
}
#fooder .fooder {
    height: 250px;
  widows: 100%;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
#fooder img{
    height: 100px;
    width: 100px;
}
.fooder>div{
   display: -webkit-flex;
   justify-content: center;
   align-items: center;
}
.fooder>div span:nth-child(2){
   margin: 0 20px;
}
</style>