export default async function deleteRoom(token: string, rid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/rooms/${rid}`,
    {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    throw new Error("Cannot fetch shops")
  }

  return await response.json()
}
