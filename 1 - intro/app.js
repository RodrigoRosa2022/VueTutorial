const app = Vue.createApp({
  //data, functions
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
    }
  },

  methods: {
    changeTitle(titlefrombody) {
      // this.title = 'Words of Randiance'
      this.title = titlefrombody
    }
  }

})

app.mount('#app')