<template>
<h1>{{ title }}</h1>
<br>
<div v-if="showModal">
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
</div>
<p>Welcome...</p>
<button @click.alt="toggleModal">open modal (alt)</button>
<br>
<Class01Intro />
</template>

<script>
import Modal from './components/Modal.vue'
import Class01Intro from './components/Class01Intro.vue'
export default {
  name: 'App',
  components: { Modal , Class01Intro, Class01Intro},
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
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
