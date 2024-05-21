<template>
    <section>
  <seccion-presentacion></seccion-presentacion>
<seccion-segunda></seccion-segunda>
<footer-inicial></footer-inicial>
</section>
</template>

<script>
import SeccionPresentacion from '../components/SeccionPresentacion.vue'
import SeccionSegunda from '../components/SeccionSegunda.vue'
import FooterInicial from '../components/FooterInicial.vue'
export default {
  components: { SeccionPresentacion, SeccionSegunda, FooterInicial },

}
</script>

<style>

</style>

