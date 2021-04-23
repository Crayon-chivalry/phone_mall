import {request} from './request'

// 获取首页的网络请求数据
export function getHomeData() {
  return request({
    url: '/'
  })
}

export function getGoods() {
  return request({
    url: '/goods'
  })
}