import { getServerSession } from "next-auth"
import Image from "next/image"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) {
    redirect("/login")
    return null
  }

  return <main></main>
}
