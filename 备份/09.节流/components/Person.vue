<template>
  <!-- <div class="person">
    姓: <input type="text" @input="inputName"> <br>
    名: <input type="text">
    全名：<span></span>
  </div> -->
  <div class="Person"><button @click="clickButton">按钮</button></div>
</template>
<script setup lang="ts" name="Person">
  function throttle(fn, delay){
    var timer = null as any;
    var prev = 0;
    return function(){  
      var now = Date.now(); //当前时间
      var context = this; //上下文
      var args = arguments; //参数
      //如果当前时间-上次执行的时间大于设置的delay，则执行函数
      if(now - prev > delay){
        if(timer){
          clearTimeout(timer);
      }
        timer = setTimeout(()=>{
          fn.apply(context, args);
          console.log(context,args,this,'zhixing')
        }, delay);
        prev = now;
    }
  }
  }
  function click(){ 
    console.log('按钮被点击了');
  }
  function clickButton(){console.log('按钮被点击了');}
  clickButton = throttle(click, 1000);
</script>

<style>
/* .person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
} */
body {
	padding: 100px;
}
.box {
	border: 1px solid black;
	width: 300px;
	background: #ddd;
}
.left {
	width: 100px;
	height: 100px;
	float: left;
	background: rgb(81, 196, 204);
}
</style>