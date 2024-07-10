export default async function createAnnouncementExcel(
  token: string,
  contents: string
) {
  console.log(token)
  console.log(contents)

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/announcements/convert-to-excel`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: contents,
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot create announcement")
  }

  return response
}
