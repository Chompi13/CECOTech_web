<template>
    <section id="seccion2">
        <div class="div">
            <img srcset="../assets/servicio-cliente.jpg">
            <p>Estamos a tu disposicion para proporcionarte asesoramiento gratuito. <br>
                Puedes contactar con nosotros a través de nuestra direccion de correo <b>pepepe@gmail.com</b>
            </p>

        </div>

        <div class="div">
            <p> Solo tendrás que encargarte de disfrutar de la conducción<br>
                Con nuestra <b>garantía de 5 años</b> no tendrás de que preocuparte.
            </p>
            <img srcset="../assets/img-garantia.jpg">
        </div>
    </section>
</template>
<script>
</script>
<style>
.div{
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: space-evenly;
}
.div img {
    max-width: 30rem;
    width: 30%;
    max-height: 20rem;
    height: 30%;
    margin: 20px;
    border-radius: 25px 0;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
}
.div p{
    align-self: center;
    font-size: 120%;
}
</style>