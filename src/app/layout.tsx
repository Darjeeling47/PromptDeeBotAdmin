import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import { ThemeProvider } from "@mui/material/styles"
import theme from "@/utils/muiTheme"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import NextAuthProvider from "@/providers/NextAuthProvider"

const prompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
})

export const metadata: Metadata = {
  title: "PromptDee LineBot",
  description: "PromptDee LineBot System",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={prompt.className}>
        <NextAuthProvider session={session}>
          <ThemeProvider theme={theme}>
            <Navbar />
            <main className='container mx-auto pt-12 mb-10'>{children}</main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
