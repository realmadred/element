<template>
  <div id="app">
    <el-button @click="handelClick" type="primary" >add</el-button>
    <el-button @click="handelUpdate" type="primary" >修改</el-button>
    <el-button @click="handelSave" type="primary" >save</el-button>
    <MyButton :btns="btns"/>
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

export default {
  name: "App",
  components: {
    MyButton
  },
  data() {
    return {
      btns: [{ id: 1, name: "aaa", type: "primary" }],
      count: 1,
      types: ["primary", "success", "info", "warning", "danger"]
    };
  },
  methods: {
    handelClick() {
      this.btns.push({
        id: ++this.count,
        name: "aaa" + this.count,
        type: this.types[this.count % 5]
      });
      console.log(this.btns);
    },
    handelUpdate() {
      this.btns = [];
    },
    handelSave() {
      this.btns = [{ id: 1, name: "aaa", type: "primary" }];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.block {
  display: inline-block;
  padding: 60px;
}
</style>
