"use client"
import { ReactNode } from "react"
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs"

interface Props {
  children: ReactNode
}

export const AuthProvider = ({children}: Props) => {
  return <KindeProvider>{children}</KindeProvider>
}