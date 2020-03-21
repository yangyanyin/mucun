<template>
  <ul class="flag animation-show">
    <li>
      <img src="../../assets/images/country1.png" />
    </li>
    <li>
      <img src="../../assets/images/country2.png" />
    </li>
    <li>
      <img src="../../assets/images/country3.png" />
    </li>
    <li>
      <img src="../../assets/images/country4.png" />
    </li>
    <li>
      <img src="../../assets/images/country5.png" />
    </li>
    <li>
      <img src="../../assets/images/country6.png" />
    </li>
    <li>
      <img src="../../assets/images/country7.png" />
    </li>
    <li>
      <img src="../../assets/images/country8.png" />
    </li>
    <li>
      <img src="../../assets/images/country9.png" />
    </li>
  </ul>
</template>
<style scoped lang="less">
.flag {
  text-align: center;
  padding: 55px 30px;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  li {
    display: inline-block;
    width: 65px;
    border-radius: 4px;
    transition: .4s;
    img {
      display: block;
      width: 100%;
    }
    &:hover {
      box-shadow: 0px 4px 6px 4px rgba(197, 197, 197, 0.3);
    }
  }
  @media(max-width: 767px) {
    padding: 30px 0;
    li {
      margin: 0;
      width: 9%;
    }
  }
}
</style>