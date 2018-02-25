/**
 * Created by arron_Li on 17/12/11. // 省市区接口
 */

import request from '@/utils/request'

export function submitchat (query) {
  return request({
    url: '/commit?access_token=ybjyybtbeojq1d1evkyigh3peavereom',
    method: 'post',
    data: query,
    wechat: true
  })
}

export function getchatlist (query) {
  return request({
    url: '/wechatlist',
    method: 'get',
    data: query
  })
}

export function getauthorUrl () {
  return request({
    url: 'https://api.mhw001.com/microMall/miniApp/version-1.0/getAuthCode',
    method: 'get'
  })
}
