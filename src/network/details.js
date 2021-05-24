import {request} from "./request";

export function getDetails(iid) {
  return request({
    url: '/details',
    params: {
      iid
    }
  })
}

export class shopInfo {
  constructor(itemInfo) {
    this.price = itemInfo.price
    this.sales = itemInfo.sales
    this.icon = itemInfo.icon
    this.collections = itemInfo.collections
    this.title = itemInfo.title
    this.service = itemInfo.service
  }
}

export class shopComm {
  constructor(itemInfo) {
    this.userName = itemInfo.userName
    this.comments_number = itemInfo.comments_number
    this.commentsText = itemInfo.commentsText
    this.comments_rate = itemInfo.comments_rate
  }
}