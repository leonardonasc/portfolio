"use client"

import { useEffect, useState } from "react"

export function TextClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-US"))

    update()
    const interval = setInterval(update, 1000)

    return () => clearInterval(interval)
  }, [])

  return <h1 className="font-mono text-sm">{time}</h1>
}
