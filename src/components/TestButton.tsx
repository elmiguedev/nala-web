'use client'
import { signOut } from "next-auth/react";

export default function TestButton() {
  const getData = async () => {
    const response = await fetch("/api/test")
    const data = await response.json()
    alert(JSON.stringify(data))
  }
  return (
    <button className="btn btn-primary" onClick={getData}>Test</button>
  )
}