export interface Shop {
  _id: string
  name: string
  shopCode: string
  province: string
}

export interface ShopJson {
  count: number
  pagination: {
    now: number
    limit: number
    last: number
    next: number
    prev: number
  }
  shops: Shop[]
}
