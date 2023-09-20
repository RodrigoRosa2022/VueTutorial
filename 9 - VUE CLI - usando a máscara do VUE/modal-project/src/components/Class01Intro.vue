<template>
<input type="text" ref="name">
<button @click="handleClick">Click Me</button>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style scooped>
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
