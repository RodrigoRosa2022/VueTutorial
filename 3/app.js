const app = Vue.createApp({
  //data, functions
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks: false
    }
  },

  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks

    },
    
  }

})

app.mount('#app')