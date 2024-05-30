<template>
  <section id="presentacion">
    <div class="coche">
      <div class="cont-land">
        <p class="parrafo1 typing">Aquí comienza tu viaje</p>
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
  background-image: url(../assets/Carceles.png);
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.parrafo1 {
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 4rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.cont-land {
  width: 45rem;
  margin-left: 2rem;
  margin-top: 4rem;
}

.parrafo2 {
  width: 100%;
  text-align: center;
  color: #e6e6e6;
  font-size: 2rem;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.typing {
  width: 100%;
  text-align: center;
  color: #ffffff;
  overflow: hidden; 
  white-space: nowrap; 
  border-right: 0.15em solid orange; 
  border-bottom: white ;
  animation: typing 3.5s steps(40, end), final 0.75s step-end infinite;
}

.botones-land {
  width: 100%;
  text-align: center;
  display: flex;
  margin-top: 3rem;
  justify-content: center;
}

.btn-descubre {
  border-radius: 1px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  margin: 0 1rem;
  transition: background-color 0.5s ease;
}

section#presentacion .btn-descubre:hover {
  color: #000000;
  background-color: #d7d7d7;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes final {
  from, to { border-color: transparent; }
  50% { border-color: rgb(235, 235, 235); }
}
</style>