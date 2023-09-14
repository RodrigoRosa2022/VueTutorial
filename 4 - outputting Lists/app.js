const app = Vue.createApp({
  //data, functions
  data() {
    return {
      showBooks: false,
      books: [
        {title: 'name of the wind', author: 'patrick rothfuss' },
        {title: 'the way of kings', author: 'brandon sanderson' },
        {title: 'the final empire', author: 'brandon sanderson' },
      ]

    }
  },

  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks
    },    
  }

})

app.mount('#app')