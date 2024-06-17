"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function NavItem({
  children,
  href,
  pathName,
}: {
  children: React.ReactNode
  href: string
  pathName: string
}) {
  const [textColor, setTextColor] = useState("text-gray-200")

  useEffect(() => {
    const path = children
    if (pathName == href.split("/")[1]) {
      setTextColor("text-blue-500 drop-shadow-md")
    } else {
      setTextColor("text-my-gray-200 ")
    }
  }, [pathName])

  return (
    <Link
      href={href}
      className={`${textColor} font-medium hover:text-blue-500 hover:scale-105 transition-all duration-100 flex flex-row`}>
      {children}
    </Link>
  )
}
