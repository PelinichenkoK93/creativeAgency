<template>
  <div>
    <input type="text" v-model="h1">
    <input type="text" v-model="title">
    <input type="text" v-model="description">
    <input type="text" v-model="url">
    <input type="text" v-model="content">
    <button v-on:click="newBlog">Опубликовать</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  head: {
    title: 'Создать запись',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'создать запись'
      }
    ]
  },
  data: () => ({
    h1: '',
    title: '',
    description: '',
    url: '',
    content: ''
  }),
  methods: {
    newBlog() {
      let formData = {
        h1: this.h1,
        title: this.title,
        description: this.description,
        url: this.url,
        content: this.content
      }
      axios.post('http://localhost:3000/api/service', formData)
    }
  }
}
</script>
