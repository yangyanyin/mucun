<template>
	<div>
		<Header />
		<slot>
		</slot>
		<!-- <Footer /> -->
	</div>
</template>
<script>
import Header from './commonComponent/header.vue'
import Footer from './commonComponent/footer.vue'
import '../assets/less/custom.less'
export default {
	components: {
		Header,
		Footer
	}
}
</script>