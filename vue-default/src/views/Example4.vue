<template>
  <!-- <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">Class Binding</div> -->
  <!-- <div class="container" v-bind:class="[activeClass, redClass]">Class Binding</div> -->
  <!-- <div v-bind:style="styleObject">인라인 스타일 Binding</div> -->
  <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      // isActive: true,
      // isRed: true,

      // activeClass: 'active',
      // redClass: 'text-red',

      // styleObject:{
      //   backgroundColor: 'yellow',
      //   color: 'red',
      //   fontWeight: 'bold'
      // },

      baseStyle: 'background-color:yellow;width:100%;height:200px;',
      addStyle: 'color:red;font-weight:bold;'
    };
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active{
  background-color: yellow;
  font-weight: bold;
}

.text-red{
  color: red;
}
</style>
