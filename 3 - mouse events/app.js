const app = Vue.createApp({
  //data, functions
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks: false,
      x: 0,
      y: 0

    }
  },

  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent (e, data) {
      console.log(e, e.type)
      if(data) {
        console.log(data)
      }
    },
    handleMousemove (e) {
      this.x = e.offsetX
      this.y = e.offsetY

    }
    
  }

})

app.mount('#app')