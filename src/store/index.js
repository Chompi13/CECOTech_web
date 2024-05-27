import { createStore } from 'vuex'


let api = "https://api-cecotech.azurewebsites.net"

export default createStore({
  state: {
    carceles:[],
    carcel:{},
    presos:[],
    preso:{},
    modulos:[],
    modulo:{},
    guardias:[],
    guardia:{},
    sanciones:[],
    sancion:{},
    registroTiendas:[],
    registroTienda:{},
    usuarioID: null
  },

  mutations: {
    setCarceles(state, carceles) {
      state.carceles = carceles;
    },
    setCarcel(state, carcel) {
      state.carcel = carcel;
    },
    setPresos(state, presos) {
      state.presos = presos;
    },
    setPreso(state, preso) {
      state.preso = preso;
    },
    setModulos(state, modulos) {
      state.modulos = modulos;
    },
    setModulo(state, modulo) {
      state.modulo = modulo;
    },
    setGuardias(state, guardias) {
      state.guardias = guardias;
    },
    setGuardia(state, guardia) {
      state.guardia = guardia;
    },
    setSanciones(state, sanciones) {
      state.sanciones = sanciones;
    },
    setSancion(state, sancion) {
      state.sancion = sancion;
    },
    setRegistroTiendas(state, registroTiendas) {
      state.registroTiendas = registroTiendas;
    },
    setRegistroTienda(state, registroTienda) {
      state.registroTienda = registroTienda;
    },
    setUsuarioID(state, usuarioID){
      state.usuarioID = usuarioID
    }
  },
  actions: {
     DataInit({ dispatch }){
       dispatch('fetchCarceles')
       dispatch('fetchPresos')
       dispatch('fetchModulos')
       dispatch('fetchGuardias')
       dispatch('fetchSanciones')
       dispatch('fetchRegistroTiendas')
    },
    async fetchCarceles({ commit }) {
      const response = await fetch(`${api}/carcel`);
      const data = await response.json();
      commit('setCarceles', data);
    },
    async fetchCarcel({ commit }, id) {
      const response = await fetch(`${api}/carcel/${id}`);
      const data = await response.json();
      commit('setCarcel', data);
    },
    async fetchPresos({ commit }) {
      const response = await fetch(`${api}/preso`);
      const data = await response.json();
      commit('setPresos', data);
    },
    async fetchPreso({ commit }, id) {
      const response = await fetch(`${api}/preso/${id}`);
      const data = await response.json();
      commit('setPreso', data);
    },
    async fetchModulos({ commit }) {
      const response = await fetch(`${api}/modulo`);
      const data = await response.json();
      commit('setModulos', data);
    },
    async fetchModulo({ commit }, id) {
      const response = await fetch(`${api}/modulo/${id}`);
      const data = await response.json();
      commit('setModulo', data);
    },
    async fetchGuardias({ commit }) {
      const response = await fetch(`${api}/Guardia`);
      const data = await response.json();
      commit('setGuardias', data);
    },
    async fetchGuardia({ commit }, id) {
      const response = await fetch(`${api}/guardia/${id}`);
      const data = await response.json();
      commit('setGuardia', data);
    },
    async fetchSanciones({ commit }) {
      const response = await fetch(`${api}/sancion`);
      const data = await response.json();
      commit('setSanciones', data);
    },
    async fetchSancion({ commit }, id) {
      const response = await fetch(`${api}/sancion/${id}`);
      const data = await response.json();
      commit('setSancion', data);
    },
    async fetchRegistroTiendas({ commit }) {
      const response = await fetch(`${api}/registroTienda`);
      const data = await response.json();
      commit('setRegistroTiendas', data);
    },
    async fetchRegistroTienda({ commit }, id) {
      const response = await fetch(`${api}/registroTienda/${id}`);
      const data = await response.json();
      commit('setRegistroTienda', data);
    },
    async loginC({ commit }, {user, pass}){

      const response = await fetch(`${api}/Login/login?user=${user}&pwd=${pass}`);
      if(response.status==200){
        let data = await response.json()
        commit('setUsuarioID', data.id)
        return data.id
      }else{
        return await response.text()
      }
    }
  }
})
