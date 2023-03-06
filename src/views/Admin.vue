<template>
    <div>
        <el-card>
            <div class="left">
            <el-button type="default" @click = "show = !show">Important Operation</el-button>
            <el-button type="default">OG Contract Parameters</el-button>
            <el-button type="default">OG Donate Pool</el-button>
        </div>
        <div class="card" v-if="show">
            <el-card>
                <div>
                    <el-card>
                        <h2>Transfer Administrator</h2>
                        <h3>Administrator Address: {{ address }}</h3>
                        <div class="container">
                        <div class="item">
                        <el-input type="small" placeholder="New Administrator"></el-input>
                        </div>
                        <div class="item">
                            <el-button type="primary">Confirm</el-button>
                        </div>
                    </div>
                    </el-card>
                </div>
            <div class="card">
            <el-card>
                <h2 class="font">Contract Status <span class="fontA">{{ status }}</span> </h2>
                <el-button><h2 class="font">Pause</h2></el-button>
            </el-card>
        </div>
            </el-card>
        </div>

        <div class="card">
            <el-card>
                <div class="left"><h2>Set Level 2 Administrator</h2></div>
                <div class="card">
                <el-card>
                    <div>
                        <el-table :data = "list">
                        <el-table-column prop ="no" label = "no."></el-table-column>
                        <el-table-column prop ="pid" label = "PID"></el-table-column>
                        <el-table-column prop ="name" label = "Username"></el-table-column>
                        <el-table-column prop ="address" label = "Wallet Address"></el-table-column>
                        </el-table>
                    </div>
                    <el-button type="primary">Confirm</el-button>
                </el-card>
            </div>
            </el-card>
        </div>
        </el-card>
    </div>
</template>
<script>

export default{
    name:'adminModel',
    data(){
        return{
            address:"0x614b9a81C8349437d6469C04b3a393640Bc25E87",
            status:"Runing",
            show:false,
            list:[
                {no:1,pid:1,name:"kik",address:"0x614b9a81C8349437d6469C04b3a393640Bc25E87"}
        ],
        }
    },
    methods:{

    }
}
</script>
<style>
.left{
    float: left;
}
.card{
    padding-top: 0px ;
}
.input{
   padding-top: 10px;
}
.container {
  font-size: 0;
}
.item{
    display: inline-block;
    margin: 10px;
}
.set{
    padding-left: 350px;
}
.font{
    color: red;
}
.fontA{
    color: green;
}

</style>