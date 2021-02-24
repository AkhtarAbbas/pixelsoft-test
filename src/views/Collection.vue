<template>
  <div class="wrapper">
    <div class="details">
      <h1>{{ (details && details.title) || "" }}</h1>
      <p>{{ (details && details.description) || "" }}</p>
    </div>
    <div class="boxes">
      <div
        v-for="(box, index) in blocks"
        :key="index"
        :class="`box ${box.value == 100 ? 'purple' : 'grey'}`"
        @click="updateValue(box)"
      >
        <span>{{ box.value }}</span>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <p>Good job on completing your collection!</p>
      <button @click="closeModal">Close</button>
    </div>
    <div v-if="showModal" class="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Collection",
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    ...mapState(["details", "blocks"])
  },
  methods: {
    ...mapActions(["setBoxValue"]),
    updateValue(box) {
      this.setBoxValue(box);
      if (this.blocks.every(this.hasValue100)) {
        this.showModal = true;
      }
    },
    hasValue100(block) {
      return block.value == 100;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
.boxes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  grid-auto-rows: min-content;
}
.box {
  height: 120px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}
.box.purple {
  background-color: purple;
}
.box.grey {
  background-color: grey;
}
.modal {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 300px;
  width: 100%;
  background-color: #fff;
  min-height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  z-index: 9;
}
.modal button {
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.44);
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
