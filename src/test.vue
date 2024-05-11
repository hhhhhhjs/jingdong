<template>
    <div>上传文件</div>
    <input type="file" ref="file" >
    <el-button @click="upload">点击上传</el-button>
   
</template>
<script>
import { ref,onMounted } from 'vue';
export default{
    name:'DoneloadComp',
    setup(){
        const file = ref(null)
        function upload(){
            file.value.click()
        }
        return{
            file,
            upload
        }
    }
}
</script>
