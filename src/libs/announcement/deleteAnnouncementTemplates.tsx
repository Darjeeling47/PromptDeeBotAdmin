export default async function deleteAnnouncementTemplate(
  token: string,
  aid: string
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/announcements/templates/${aid}`,
    {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot delete announcement")
  }

  return response.json()
}
