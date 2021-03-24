<template>
  <Layout>
    <h1>Post1-动态发送请求获取数据</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
    }
  },
  async created() {
    const { data } = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    )
    this.list = data
  },
}
</script>

<style scoped>
</style>