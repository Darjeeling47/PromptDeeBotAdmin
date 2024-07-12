export default async function createAnnouncementTemplate(
  token: string,
  data: string
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/announcements/templates`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: data,
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot create announcement")
  }

  return response.json()
}
