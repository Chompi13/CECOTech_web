<template>
 <v-data-table v-if="param == 'carceles'" :items="this.carceles"></v-data-table>
 <v-data-table v-if="param == 'presos'" :items="this.presos"></v-data-table>
 <v-data-table v-if="param == 'guardias'" :items="this.guardias"></v-data-table>
 <v-data-table v-if="param == 'modulos'" :items="this.modulos"></v-data-table>
 <v-data-table v-if="param == 'sanciones'" :items="this.sanciones"></v-data-table>
 <v-data-table v-if="param == 'registroTiendas'" :items="this.registroTiendas"></v-data-table>

</template>

<script>
import { mapState } from 'vuex'

export default {
   data(){
    return{
        param : this.$route.params.id
    }
   },
  computed: {
    ...mapState(['carceles','presos','guardias','modulos','sanciones','registroTiendas'])
  },
  watch:{
    $route(to){
    this.param = to.params.id
    }
    
  }
    
  }
</script>

<style scoped>

.v-data-table{
    width: 80%;
    margin: 0 10%;
    margin-top: 100px;
}


</style>