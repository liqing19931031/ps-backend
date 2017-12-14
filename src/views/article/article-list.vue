<template lang="html">
  <div class="article-list">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="文章标题">
        <template slot-scope="scope">
          {{scope.row.des}}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="95" align="center">
        <template slot-scope="scope">
          <el-tag>{{scope.row.singer}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="阅读数" width="115" align="center">
        <template slot-scope="scope">
          {{scope.row.listener}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <button type="button" class='el-button el-button--primary el-button--small'>编辑</button>
          <button type="button" class='el-button el-button--danger el-button--small'>删除</button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    background
    @current-change='currentChange'
    layout="prev, pager, next"
    :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { getarticleList } from '@/api/article'

export default {
  data () {
    return {
      list: null,
      listLoading: true
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.listLoading = true
      getarticleList().then(response => {
        this.list = response.result
        this.listLoading = false
      })
    },
    currentChange (page) { // 跳转页数
      console.log(page)
    },
    handleDownload () {
      this.downloadLoading = true
    }
  }
}
</script>

<style lang='less'>
  .article-list{
    padding: 25px;
    .el-table__body-wrapper{
      overflow: hidden;
    }
    .el-pagination{
        padding: 0;
        margin-top: 100px;
    }
  }
</style>
