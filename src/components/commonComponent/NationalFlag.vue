<template>
  <ul class="flag">
    <router-link tag="li" to="/project/details/65">
      <img src="../../assets/images/country1.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/90">
      <img src="../../assets/images/country2.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/10">
      <img src="../../assets/images/country3.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/61">
      <img src="../../assets/images/country4.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/190">
      <img src="../../assets/images/country5.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/191">
      <img src="../../assets/images/country6.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/232">
      <img src="../../assets/images/country7.png" />
    </router-link>
    <router-link tag="li"  to="/project/details/243">
      <img src="../../assets/images/country8.png" />
    </router-link>
    <router-link tag="li"  to="/philippines-details">
      <img src="../../assets/images/country10.png" />
    </router-link>
    <router-link tag="li"  to="/malaysia-details">
      <img src="../../assets/images/country11.png" />
    </router-link>
    <router-link tag="li"  to="/singapore-details">
      <img src="../../assets/images/country9.png" />
    </router-link>
    <router-link tag="li"  to="/korea-details">
      <img src="../../assets/images/country12.png" />
    </router-link>

    <router-link tag="li" to="/japan-details">
      <img src="../../assets/images/country14.png" />
    </router-link>
    <router-link tag="li" to="/canada-details">
      <img src="../../assets/images/country13.png" />
    </router-link>
    <router-link tag="li" to="/portugal-details">
      <img src="../../assets/images/country15.png" />
    </router-link>
    

    
  </ul>
</template>
<style scoped lang="less">
.flag {
  text-align: center;
  padding: 55px 10px;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  li {
    display: inline-block;
    width: 65px;
    border-radius: 4px;
    transition: .4s;
    cursor: pointer;
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
      width: 8%;
    }
  }
}
</style>