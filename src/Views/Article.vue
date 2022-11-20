<script>
import { reactive, toRefs } from 'vue';

export default{
    async setup() {
        const data = reactive({
            list: [],
        });

        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        data,list = await result.json();
        console.log("tes data ", data) ;

        return {...toRefs(data) };
    },
};
</script>
<template>
    <h1>This Is Article</h1>
    <ul v-for="(item, index) in list" :key="index">
    <li>
        <router-link :to="'/article/$(item.id)'">
        </router-link>
        <h3>{{item.title}}</h3>
        <p>{{item.body}}</p>
    </li>
    </ul>

</template>