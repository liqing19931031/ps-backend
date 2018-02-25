<template lang="html">
  <div class="wechat-list">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="小程序名称" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width='150' align="center">
        <template slot-scope="scope">
          <button type="button" class='el-button el-button--primary el-button--small' @click='authorization()'>
            授权
          </button>
          <button type="button" class='el-button el-button--primary el-button--small' @click='publish(scope.row.extappid)'>发布</button>
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
import { getchatlist, submitchat, getauthorUrl } from '@/api/wechat'

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
      getchatlist().then(response => {
        this.list = response.result
        this.listLoading = false
      })
    },
    authorization () {
      getauthorUrl().then(response => {
        window.location.href = `https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=wx1181a142fd558e54&pre_auth_code=${JSON.parse(response.data).pre_auth_code}&redirect_uri=http://localhost:9001/wechat/wechatList&auth_type=2`
        console.log(JSON.parse(response.data))
      })
    },
    publish (extappid) {
      submitchat({
        'template_id': 0,
        'ext_json': {
          'extAppid': 'wx0f777b2720c63d56'
        },
        'user_version': 'v1.0',
        'user_desc': 'test'
      }).then(res => {
      })
    },
    currentChange (page) { // 跳转页数
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.wechat-list{
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
