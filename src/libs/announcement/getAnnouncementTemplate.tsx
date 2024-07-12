export default async function getAnnouncementTemplate(
  token: string,
  aid: string
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/announcements/templates/${aid}`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot create announcement")
  }

  return response.json()
}
