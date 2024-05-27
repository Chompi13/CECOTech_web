<template>
  <v-app>
    <v-main>
      <header-inicial/>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import HeaderInicial from './components/HeaderInicial.vue';


export default {
  name: 'App',
components:{
  HeaderInicial
},
  beforeCreate(){
    this.$store.dispatch('DataInit');
  },

};
</script>

<style>
header-inicial{
  z-index: 2;
}
router-view{
  z-index: 1;
}
</style>
