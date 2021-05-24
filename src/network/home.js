import {request} from './request'

// 获取首页的网络请求数据
export function getHomeData() {
  return request({
    url: '/'
  })
}

export function getGoods(type) {
  return request({
    url: '/goods',
    params: {
      type
    }
  })
}