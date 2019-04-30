<template>
    <Layout>  
        <!-- banner -->
		<Banner />
    </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'
import Banner from './component/banner.vue'

export default {
    name: 'app',
    components: {
        Layout,
        Banner
    }
}
</script>

