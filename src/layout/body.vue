<template>
<el-button @click="increase">点击增加</el-button>
<div>{{ store.count }}</div>
<div>{{ store.name }}</div>
<div>{{ count }}</div>
</template>
<script>
import { ref } from 'vue'
import { Store } from '@/stores/index.js'
export default{
    name:'body',
    setup() {
        const store = Store()
        const count = ref('')
        function increase(){
            store.count++
            count.value = store.count
        }
        

        
        return { 
            count,
            increase,
            store,
        }
    }
}

</script>