/**
 * Created by arron_Li on 17/12/8. // 基于axios改造的全局公共异步请求
 */
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://10.0.92.25:3000/', // 公共请求地址 这边是我本地的node环境
  timeout: 5000
})

export default service
