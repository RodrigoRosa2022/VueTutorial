const app = Vue.createApp({
  //data, functions
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: false,
      books: [
        {title: 'name of the wind', author: 'patrick rothfuss', image: 'assets/1.jpg', isFav: true },
        {title: 'the way of kings', author: 'brandon sanderson', image: 'assets/2.jpg', isFav: false },
        {title: 'the final empire', author: 'brandon sanderson', image: 'assets/3.jpg', isFav: true },
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