<template>
  <section id="presentacion">
    <div class="coche">
      <div class="cont-land">
        <p class="parrafo1">Aquí comienza tu viaje</p>
        <p class="parrafo2">Busques lo que busques, <b>lo tenemos</b></p>
        <div class="botones-land">
          <v-btn @click="ElPepe" class="btn-descubre">Descubre más</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  methods:{
    //Metodo para que el boton te lleve a las marcas
    ElPepe(){
            this.$router.push("/login")
            //.then(window.location.reload())
        }
  }
}
</script>

<style>
.coche {
  background-image: url(../assets/img-coche.jpg);
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.parrafo1 {
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 4rem;
}

.cont-land {
  width: 45rem;
  margin-left: 2rem;
}

.parrafo2 {
  width: 100%;
  text-align: center;
  color: #e6e6e6;
  font-size: 2rem;
}

.botones-land {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.btn-descubre {
  border-radius: 40px;
  border: none;
  box-shadow: 0 0 10rem rgb(224, 224, 224);
  margin: 0 1rem;
}

section#presentacion .btn-descubre:hover {
  color: #ececec;
  background-color: #235741;
}
</style>