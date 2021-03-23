<template>
	<div>
		<h1>动态路由</h1>
		<!-- id与定义的文件名一致 -->
		<h3>User{{ $route.params.id }} Page</h3>
	</div>
</template>

<script>
	export default {
		name: "UserPage",
	}
</script>

<style></style>
