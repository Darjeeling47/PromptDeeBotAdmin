export interface Room {
  _id: string
  shopId: string
  roomType: string
  roomId: string
  roomName: string
  shops: {
    _id: string
    name: string
    shopCode: string
    province: string
    score: number
  }
}

export interface RoomJson {
  count: number
  pagination: {
    now: number
    limit: number
    last: number
    next: number
    prev: number
  }
  rooms: Room[]
}
