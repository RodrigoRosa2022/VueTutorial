<template>
<h1>{{ title }}</h1>
<br>
<div v-if="showModal">
  <Modal v-if="firstModal" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price! </p>
  </Modal>

  <Modal v-if="!firstModal" theme="sale" @close="toggleModal">
      <h1>Second Modal</h1>
      <p>Congratulations for the Modal number 2! </p>
  </Modal>

</div>
<p>Welcome...</p>
<button @click.alt="toggleModal">open modal (alt)</button>
<button @click="changeModal">changeModal</button>
<br>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      firstModal: true
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    changeModal() {
      this.firstModal = !this.firstModal
      console.log(this.firstModal)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
