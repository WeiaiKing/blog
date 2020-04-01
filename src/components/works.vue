<template>
  <div class="works">
    <img src="https://picsum.photos/1440/300" alt />
    <div class="display">
      <div>
        <span>MY WORD DISPLAY</span>
        <div>我的作品展示</div>
      </div>
      <div class="product">
        <div>
          <div>
            <div>web development</div>
            <div>网页开发</div>
            <img src="https://picsum.photos/400" alt />
          </div>
          <div>
            <div>H5 development</div>
            <div>移动端H5开发</div>
            <img src="https://picsum.photos/400" alt />
          </div>
        </div>
        <div>
          <div>
            <div>wxApp development</div>
            <div>微信小程序开发</div>
            <img src="https://picsum.photos/400" alt />
          </div>
          <div class="wish">
            <!-- <div class="wish"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "works"
};
</script>
<style  scoped>
.works > img {
  width: 100%;
  height: 300px;
}
.display {
  /* display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  margin: 5% 15%;
}
.display span {
  font-weight: bold;
}
.display > div:nth-child(1) {
  background-image: url("../assets/bgcimg.png");
  font-size: 1.5rem;
  width: 260px;
  height: 130px;
}
.product > div {
  display: -webkit-flex;
}
.product > div>div:nth-child(1){
  box-shadow: 4px 2px 5px 0px #ccc;
  margin-right: 120px;
  margin-top: 60px;
}

.product img{
  width:350px;
  height: 350px;
}
.wish{
    width: 350px;
    height: 390px;
    background-image: url('../assets/wish.png');
    background-size: 350px 420px;
}
</style>