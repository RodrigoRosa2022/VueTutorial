<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale', dark: theme === 'dark'}">
      <h1> {{ header }} </h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>


<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;

}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}

h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}

p {
  font-style: normal;
}

.sale {
  background: crimson;
  color: white;
}

.sale h1 {
  color: white;
}

.dark {
  background: black;
  color: lightgreen;
}

.dark h1 {
  text-shadow: 0 0 10px lightgreen,
  0 0 20px lightgreen,
  0 0 40px lightgreen
  ;
}



</style>