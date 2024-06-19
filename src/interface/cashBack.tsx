import { Shop } from "./shop"

export interface Order {
  _id: string
  code: string
  amount: number
}

export interface CashBack {
  _id: string
  shopId: string
  cycleDate: Date
  payDate: Date
  totalAmount: number
  orders: Order[]
  uploadDate: Date
  shop: Shop
}

export interface CashBackJson {
  count: number
  pagination: {
    now: number
    limit: number
    last: number
    next: number
    prev: number
  }
  cashBacks: CashBack[]
}
