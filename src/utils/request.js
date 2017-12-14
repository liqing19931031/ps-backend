/**
 * Created by arron_Li on 17/12/8. // 基于axios改造的全局公共异步请求
 */
import ajax from './ajax'

//  利用函数柯理化固定url 并返回新的ajax对象
const service = function(data) {
  return ajax(Object.assign(data, { async: true }), 'http://10.0.92.25:3000')
}

export default service
