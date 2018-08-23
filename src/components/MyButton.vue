<template>
  <div>
    <el-row>
      <el-button v-for="item in tempButtons" :key="item.id" :type="item.type">{{item.name}}</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      buttons: []
    };
  },
  props: {
    btns: {
      type: Array,
      default: []
    }
  },
  computed: {
    tempButtons() {
      let tempBtns = []
      if (this.btns) {
        let len = this.btns.length;
        for (let i = 0; i < len; i++) {
          let btn = this.btns[i];
          btn.id = i;
          btn.del = false;
          tempBtns.push(btn);
        }
      }
      return tempBtns;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  padding-bottom: 20px;
}
</style>
