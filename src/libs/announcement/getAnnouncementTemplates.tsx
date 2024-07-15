export default async function getAnnouncementTemplates(token: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/announcements/templates`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot gets announcement")
  }

  return response.json()
}
