<template lang="html">
  <el-form-item :label='label'>
    <!-- <el-col :span="5" v-for='(item, index) in form[keyname]' :key='index'>
      <el-select v-model='data[index][0].id' placeholder="请选择">
        <el-option :label='item.name' :value='item.id' v-for='item in data[index]' :key='item.id'></el-option>
      </el-select>
    </el-col> -->
    <el-col :span="5">
      <el-select placeholder="请选择" v-model='area[0]' @change='changeProvince'>
        <el-option :label='item.name' :value='item.id' v-for='item in dataList.provinceList' :key='item.id'></el-option>
      </el-select>
    </el-col>
    <el-col :span="5">
      <el-select placeholder="请选择" v-model='area[1]' @change='changeCity'>
        <el-option :label='item.name' :value='item.id' v-for='item in dataList.cityList' :key='item.id'></el-option>
      </el-select>
    </el-col>
    <el-col :span="5">
      <el-select placeholder="请选择" v-model='area[2]'>
        <el-option :label='item.name' :value='item.id' v-for='item in dataList.areaList' :key='item.id'></el-option>
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
      dataList: {
        provinceList: null,
        cityList: null,
        areaList: null
      },
      area: [
        110000,
        110100,
        110101
      ]
    }
  },
  created () {
    this.changeProvince(0, 1)
  },
  mounted () {
  },
  methods: {
    changeProvince (id, first) {
      getarea(0).then(province => {
        if (first) {
          this.dataList.provinceList = province.result
          this.area[0] = province.result[0].id
        }
        return getarea(id)
      }).then(city => {
        this.dataList.cityList = city.result
        this.area[1] = city.result[0].id
        return getarea(city.result[0].id)
      }).then(area => {
        this.dataList.areaList = area.result
        this.area[2] = area.result[0].id
        this.form[this.keyname] = this.area
      })
    },
    changeCity (id) {
      getarea(id).then(area => {
        this.dataList.areaList = area.result
        this.area[2] = area.result[0].id
        this.form[this.keyname] = this.area
      })
    }
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
