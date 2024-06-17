"use client"

import { Button, TextField } from "@mui/material"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    if (email && password) {
      signIn("credentials", {
        email: email,
        password: password,
        callbackUrl: "/",
      })
    } else {
      alert("Please provide all required information")
    }
  }

  return (
    <main className='flex fixed top-0 bottom-0 left-0 right-0 justify-center items-center'>
      <div className='flex flex-col bg-white shadow-lg p-10 space-y-2 w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl'>
        <h1 className='text-center text-pd-blue-100 text-3xl font-semibold'>
          Prompt Dee
        </h1>
        <h2 className='text-center text-lg'>Line Bot System</h2>
        <div className='flex flex-col w-full space-y-5'>
          <TextField
            id='standard-basic'
            label='Email'
            variant='standard'
            onChange={handleChangeEmail}
          />
          <TextField
            id='standard-basic'
            label='Password'
            variant='standard'
            onChange={handleChangePassword}
          />
          <Button variant='contained' onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </main>
  )
}
