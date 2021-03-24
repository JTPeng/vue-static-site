<template>
  <Layout>
    <h1>Post2-GraphQL获取数据进行预渲染</h1>
    <ul>
      <li v-for="item in $page.article.edges" :key="item.node.id">
        <g-link to="/">{{ item.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  article:allPost{
    edges{
      node{
        id,
        title,
        content
      }
    }
  }
}

</page-query>
<script>
export default {}
</script>

<style scoped>
</style>