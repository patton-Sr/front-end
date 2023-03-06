<template>
    <div class="home">
      <h1>Home</h1>
      <el-button type = "primary">{{ buttonText }}</el-button>
    </div>
  </template>
  
  <script>
  export default {
 
    name: 'HomePage',
    data(){
      return{
        buttonText:'Admin',

      }
    },
    methods:{

    }
  }
  </script>
  