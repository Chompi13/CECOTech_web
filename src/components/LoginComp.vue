<template>
  <v-container
    class="fill-height d-flex align-center justify-center"
    style="margin-top: -8%; max-width: 720px"
  >
    <v-row align="center" justify="center" style="height: 50vh" >
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12">
                  <v-card-text class="mt-12">
                    <h4 class="text-center" style="font-size: 25px">
                      Entra en tu cuenta
                    </h4>
                    <h6

                      class="text-center grey--text"
                      style="font-size: 12px; margin-top: 4%"
                    >
                      Introduce tu usuario y contraseña <br />para poder seguir
                      navegando
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Usuario"
                          v-model="usuario.nombre_usuario"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                          :rules="[(v) => !!v || 'El usuario es requerido']"
                        />
                        <v-text-field
                          label="Password"
                          v-model="usuario.contrasenia_usuario"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                          :rules="[(v) => !!v || 'La password es necesaria']"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Recuérdame"
                              class="mt-n1"
                              color="blue"
                            />
                          </v-col>
                        </v-row>
                        <v-btn style="margin-bottom: 10%;"
                        
                          dark
                          block
                          tile
                          @click="
                            login()
                          "
                          >Entrar</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import CryptoJS from 'crypto-js';


export default {
  data: () => ({
    step: 1,
    usuario: {
      nombre_usuario: "",
      contrasenia_usuario: "",
    },
  }),
  //Implementacion de los metodos del store
  methods: {
    ...mapActions(["loginC"]),

    Inicio() {
      this.$router.push("/");
    },
    //Esta funcion es asincrona por lo cual en este caso espera hasta recibir respuesta del metodo iniciarSesionUsuario
    async login() {
    
    const hash = CryptoJS.SHA256(this.usuario.contrasenia_usuario).toString(CryptoJS.enc.Hex);

    console.log(hash)

      let mess = await this.loginC({
          user: this.usuario.nombre_usuario,
          pass: hash,
        });
      if (!isNaN(parseFloat(mess)) && isFinite(mess)) {
          this.$router.push("/");
      } else {
        alert(mess)
      }
    },
  },
};
</script>
