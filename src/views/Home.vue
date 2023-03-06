<template>
  <div class="body">
    <el-card>
    <div class="home">
      <h1>OG Pool</h1>
      <el-button type = "primary" class="right" @click = "$router.push('/admin')">{{ buttonText }}</el-button>
    </div>
    <div class="left">
      <el-button type = "default" >OG Donate Pool</el-button>
      <el-button type = "default" >WhiteList</el-button>
    </div>
    <div class="card">
      <el-card>
      <h2>OG Round 1</h2>
      <h2>FDT-OG Donate Pool Amount {{ poolAmount }}</h2>
      <h2>Value $ {{ valueA }}</h2>
      <h2>total Donate {{ total }}ETH</h2>
      <div>
        <el-card>
          <h3>Donate</h3>
          <el-select v-model="value" placeholder="ETH">
            <el-option v-for = "item in options" :key = "item.value" :label = "item.label" :value = "item.value">
            </el-option>

          </el-select>
          <div class="input">
        <el-input size = "mini" ></el-input>
      </div>
      <div class="donate">
      <el-button type="primary" >Donate</el-button>
    </div>
        </el-card>
      </div>
      <el-card>
        <div class="left ">
        <h2>Donate Records</h2>
      </div>
      <div class="left top">
        <el-button type="default" @click="showList">All Records</el-button>
        <el-button type="default" @click="showListA">My Records</el-button>
      </div>
      <div v-if="show">
        <el-table :data="tableData">
  <el-table-column prop="no" label="no."></el-table-column>
  <el-table-column prop="pid" label="PID"></el-table-column>
  <el-table-column prop="username" label="Username"></el-table-column>
  <el-table-column prop="address" label="WalletAddress"></el-table-column>
  <el-table-column prop="ethAmount" label="ETH"></el-table-column>
  <el-table-column prop="value" label="Value"></el-table-column>
  <el-table-column prop="rate" label="Rate"></el-table-column>
  <el-table-column prop="fdtAmount" label="FDT-OG Amounts"></el-table-column>
  <el-table-column prop="time" label="Time(UTC)"></el-table-column>

</el-table>
      </div>
      <div v-if="shows">
        <div class="biaoti">
        <h3>My PID: {{ pid }}</h3>
        <h3>WhiteList:{{ status }}</h3>
      </div>
      <el-table :data="Whitelist">
  <el-table-column prop="noA" label="no."></el-table-column>
  <el-table-column prop="pidA" label="PID"></el-table-column>
  <el-table-column prop="usernameA" label="Username"></el-table-column>
  <el-table-column prop="addressA" label="WalletAddress"></el-table-column>
  </el-table>

      </div>
      </el-card>
    </el-card>
    </div>

  </el-card>
</div>

  </template>
  
  <script>
  export default {
 
    name: 'HomePage',
    data(){
      return{
        buttonText:'Admin',
        poolAmount:500000,
        valueA:5000,
        total:5.5,
        options: [{
          value: 0.1,
          label: 0.1
        }, {
          value: 0.2,
          label: 0.2
        }, {
          value: 0.3,
          label: 0.3
        }, {
          value: 0.4,
          label: 0.4
        }, {
          value: 0.5,
          label: 0.5
        },{
          value: 0.6,
          label:0.6
        },
        {
          value:0.7,
          label:0.7
        },
        {
          value:0.8,
          label:0.8
        },
        {
          value:0.9,
          label:0.9
        }, {
          value:1,
          label:1
        }],
        value: '',
        tableData:[
          {no:1,pid:1,username:"abc",address:"0x614b9a81C8349437d6469C04b3a393640Bc25E87",ethAmount:1,value:1000,rate:0.01,fdtAmount:1000,time:"11.11"}
        ],
        Whitelist:[{noA:1,pidA:1,usernameA:"vvv",addressA:"0x614b9a81C8349437d6469C04b3a393640Bc25E87"}],
        show:true,
        shows:false,
        pid:5,
        status:true
      }
    },
    methods:{
      showList(){
        this.show = true;
        this.shows =false;
      },
      showListA(){
        this.show =false;
        this.shows = true;
      }
    }
  }
  </script>
<style>
.body{
  position: relative;
}
.button{
  position: absolute;
  padding: left 100px; ;
}
.card{
  margin-top: 80px;
}
.right {
  float: right;

}
.left{
  float: left;
}
.input{
  width: 220px;
  padding-left: 580px;
  padding-top: 10px;  
}
.top{
  padding-top:100px;
  margin-bottom: 50px;
}
.biaoti{
  padding-top: 200px;
}
.donate{
  padding-top: 10px;
} 
</style>