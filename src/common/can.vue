<template>
    <div id="can">
         <img :src="img_url" />
        <div>{{text}}</div>
    </div>
</template>
<script>
export default {
    name:'can',
    props: ['img_url',"text"]
   
}
</script>
<style  scoped>
#can img{
    height: 120px;
    width: 100px;
}
#can {
    margin-right: 80px;
    display: -webkit-flex;
    align-items: center;
    flex-direction: column;
}
</style>