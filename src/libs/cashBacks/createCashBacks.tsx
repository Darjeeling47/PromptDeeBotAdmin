export default async function createCashBacks(
  token: string,
  cashBackData: FormData
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/cash-back/create-many`,
    {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
      body: cashBackData,
    }
  )

  if (!response.ok) {
    alert((await response.json()).message)
    throw new Error("Cannot create cash-backs")
  }

  return await response.json()
}
