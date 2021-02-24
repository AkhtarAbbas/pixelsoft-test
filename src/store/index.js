import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    details: null,
    blocks: []
  },
  mutations: {
    SET_DETAILS(state, details) {
      state.details = details;
    },
    SET_BLOCKS(state, blocks) {
      state.blocks = blocks;
    },
    SET_VALUE(state, box) {
      for (let index in state.blocks) {
        if (state.blocks[index].id == box.id) {
          state.blocks[index].value = 100;
          break;
        }
      }
    }
  },
  actions: {
    async setMockData({ commit }) {
      let data = await import("../fixtures/mock.json").then(data => data);
      commit("SET_DETAILS", {
        description: data.description,
        title: data.title
      });
      commit("SET_BLOCKS", data.blocks);
    },
    setBoxValue({ commit }, box) {
      commit("SET_VALUE", box);
    }
  },
  modules: {}
});
