<template>
  <header id="cabecera">
    <div>
      <a style="cursor: pointer;" @click="this.$router.push('/')"><img id="logo" srcset="../assets/img-logo.png" /></a>
    </div>

    <v-tabs 
          v-if="usuarioID!= null"
          v-model="model"
          align-tabs="center"
          show-arrows
        >
          <v-tab @click="this.$router.push('/carceles')">Carceles</v-tab>
          <v-tab @click="this.$router.push('/presos')">Presos</v-tab>
          <v-tab @click="this.$router.push('/guardias')">Guardias</v-tab>
          <v-tab @click="this.$router.push('/modulos')">Modulos</v-tab>
          <v-tab @click="this.$router.push('/sanciones')">Sanciones</v-tab>
          <v-tab @click="this.$router.push('/registroTiendas')">Registros de tienda</v-tab>
    </v-tabs>
   <section id="class-head">
      <a v-if="usuarioID!= null" id="descarga" href="../files" download="Postman-win64-Setup.exe"><v-btn>Descargar App</v-btn></a>
        <a style="cursor: pointer;" @click="this.$router.push('/login')">
          <img srcset="../assets/img-usuario.png" /></a>
       </section>
      
  </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
 computed:{
  ...mapState(['usuarioID'])
 }
}

</script>

<style>
header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  top: 0;
  position: absolute ;
  background-color: rgba(248, 248, 248, 0.249);
  height: 70px;
}

#class-head{
  display: flex;
    align-items: center;
}

#class-head img{
  width: 40px;
    margin-top: 7px;
}

#ico {
  margin-left: 50px;
  height: 30px;
  margin-right: 20px;
}

v-tabs{

}

#logo {
  margin-left: 50px;
  height: 45px;
  margin-top: 20px;
  margin-bottom: 10px;
}

#search {
  display: flex;
  padding: 10px;
}

#search-input {
  outline: none;
  padding: 6px 37px 6px 15px;
  border: none;
  border-radius: 15px;
  background-color: rgba(229, 226, 226, 0.584);
  box-sizing: border-box;
}

#search-button {
  position: absolute;
  translate: 170px;
  padding: 9px 35px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#search-button img {
  width: 20px;
}

#opciones-header a {
  margin-right: 25px;
  margin-top: 25px;
  text-decoration: none;
  font-size: 25px;
  color: rgb(26, 25, 25);
}

#opciones-header a:hover {
  font-weight: bold;
}

#descarga{
  text-decoration: none;
  color: black;
}

</style>