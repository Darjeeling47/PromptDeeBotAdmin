export default async function createCashBacksNoti(
  token: string,
  cashBackId: string
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/cash-back/${cashBackId}`,
    {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    throw new Error("Cannot create cash-backs")
  }

  return await response.json()
}
