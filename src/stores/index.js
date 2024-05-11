import { defineStore } from "pinia";

const Store = defineStore('main',{
    // 定义状态
    state:() => ({
        count: 2,
        name:'pinia'
    }),
    // 定义getters
    getters: {
        
    },
    // 定义actions
    actions:{

    }
})
export {
    Store
}