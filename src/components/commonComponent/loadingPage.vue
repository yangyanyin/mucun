<template>
	<div class="loading">
		<img src="../../assets/images/loading.png" />
	</div>
</template>
<style lang="less" scoped>
  .loading{
    display: block;
    padding:340px 0 250px;
    @media(max-width: 767px) {
    	padding: 240px 0 150px;
    	img{
    		width: 32px;
    		height: 32px;
    	}
    }
  }
  img{
    display: block;
    width: 60px;
    height: 60px;
    margin: auto;
    animation: proRotate .8s infinite both;
    -webkit-animation: proRotate .8s infinite both;
  }
  @keyframes proRotate{
    100%{
      transform:rotate(360deg);
      -webkit-transform:rotate(360deg);
    }
  }
  @-webkit-keyframes proRotate{
    100%{
      transform:rotate(360deg);
      -webkit-transform:rotate(360deg);
    }
  }
</style>