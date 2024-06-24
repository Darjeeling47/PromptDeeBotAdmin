export default async function getCashBack(token: string, cbid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/cash-back/${cbid}`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    alert("Cannot fetch cash-backs")
    return null
  }

  return await response.json()
}
