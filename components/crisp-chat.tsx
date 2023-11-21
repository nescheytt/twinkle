"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d2bab249-0b0d-4230-8774-c15f805e0662")
  }, [])

  return null
}
