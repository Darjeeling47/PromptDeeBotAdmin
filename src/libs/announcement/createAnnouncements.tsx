export default async function createAnnouncements(
  token: string,
  announcementData: FormData
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/announcements/create-many`,
    {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
      body: announcementData,
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot create announcement")
  }

  return await response.json()
}
