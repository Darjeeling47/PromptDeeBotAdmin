export default async function getRooms(token: string, query?: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/rooms${query ? "?" + query : ""}`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error("Cannot fetch shops")
  }

  return await response.json()
}
