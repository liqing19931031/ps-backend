<template lang="html">
  <el-form-item :label='label'>
    <el-col :span="5" v-for='(item, index) in form[keyname]' :key='index'>
      <el-select v-model='form[keyname][index]' placeholder="请选择">
        <!-- <el-option :label='item.name' :value='item.id' v-for='form[keyname]'></el-option> -->
      </el-select>
    </el-col>
  </el-form-item>
</template>

<script>
import { getarea } from '@/api/area'

export default {
  props: {
    label: {
      type: String,
      default: '标题'
    },
    async: { // 子菜单是否异步加载
      type: Boolean,
      default: false
    },
    form: {
      type: Object
    },
    keyname: {
      type: String
    }
  },
  data () {
    return {
      data: []
    }
  },
  created () {
  },
  mounted () {
    getarea(0).then(response => {
        console.log(response)
    })
  },
  methods: {
    // getarea({pid: 0}).then(response => {
    //   console.log(response)
    // })
  }
}
</script>

<style lang="less">
.el-col{
  & + .el-col{
    margin-left: 15px;
  }
}
</style>
