<template>
  <Layout>
    <div>
      <h1>Post Page</h1>
      <h3>{{ $page.detail.title }}</h3>
      <p>{{ $page.detail.content }}</p>
    </div>
  </Layout>
</template>

<page-query>
query ($id:ID!) {
  detail:post(id:$id) {
    id,
    title,
    content
  }
} 
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.detail.title,
    }
  },
}
</script>

<style scoped>
</style>