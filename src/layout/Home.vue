<template>
    <div>
        <HomenavTop></HomenavTop>
    </div>
    <el-button @click="decrease">点击减少</el-button>
    <div>{{ newstore.count }}</div>
   
</template>
<script>
import HomenavTop from '@/components/Home-nav-top.vue'
import { ref } from 'vue'
import { Store } from '@/stores/index.js'
    export default {
        name: 'JingDonghome',
        components:{
            HomenavTop
        },
        setup() {
            const count = ref('')
            const newstore = Store()

        

            function decrease(){
                newstore.count --
            }

            return {
                count,
                newstore,
                decrease,
            }
        }
    }
</script>
<style scoped>
</style>