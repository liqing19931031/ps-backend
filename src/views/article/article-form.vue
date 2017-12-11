<template lang="html">
  <div class="article-form">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章类型">
        <el-select v-model="form.region" placeholder="请选择文章类型">
          <el-option label="首页推广" value="1"></el-option>
          <el-option label="详情文章" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="展示时间">
        <el-col :span="8">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.start" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="1" class="text-center">-</el-col>
        <el-col :span="8">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.end" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否展示">
        <el-switch v-model="form.show"></el-switch>
      </el-form-item>
      <Cascader label="级联选择" :form='form' keyname='area'>

      </Cascader>
      <el-form-item label="图片上传">
        <img-upload :imgFile='form' :imgRule='imgRule'></img-upload>
      </el-form-item>
      <!-- <el-form-item label="级联选择">
        <el-col :span="4">
          <el-select v-model="form.provinceId" placeholder="请选择">
            <el-option :label='item.name' :value='item.id' v-for='(item, index) in provinceList'></el-option>
          </el-select>
        </el-col>
        <el-col :span="1" class="text-center">-</el-col>
        <el-col :span="4">
          <el-select v-model="form.cityId" placeholder="请选择">
            <el-option :label='item.name' :value='item.id' v-for='(item, index) in cityList'></el-option>
          </el-select>
        </el-col>
        <el-col :span="1" class="text-center">-</el-col>
        <el-col :span="4">
          <el-select v-model="form.areaId" placeholder="请选择">
            <el-option :label='item.name' :value='item.id' v-for='(item, index) in areaList'></el-option>
          </el-select>
        </el-col>
      </el-form-item> -->
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox :label='1' name="type">美食/餐厅线上活动</el-checkbox>
          <el-checkbox :label='2' name="type">地推活动</el-checkbox>
          <el-checkbox :label='3' name="type">单纯品牌曝光</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="文章">
        <el-radio-group v-model="form.radio">
          <el-radio :label='1'>啥玩意儿</el-radio>
          <el-radio :label='2'>我不知道</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文章介绍">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="文章详情">
        <Editor style="width: 1000px" keyname='content' :form='form'>
        </Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from '@/components/Editor'
import ImgUpload from '@/components/ImgUpload'
import Cascader from '@/components/Cascader'

export default {
  components: {
    Editor,
    Cascader,
    ImgUpload
  },
  data () {
    return {
      form: {
        area: [
          1,
          110100,
          110101
        ],
        pic: '',
        title: '',
        content: '',
        region: '',
        start: '',
        end: '',
        show: false,
        type: [],
        radio: 1,
        desc: '',
        provinceId: '',
        cityId: '',
        areaId: ''
      },
      imgRule: {
        ratio: 1,
        size: 300
      }
    }
  },
  // created () {
  //   this.getArea(pid = 0, name = provinceList)
  // },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<style lang='less'>
  .article-form{
    width: 700px;
    padding:30px;
    box-sizing: border-box;
  }
</style>
