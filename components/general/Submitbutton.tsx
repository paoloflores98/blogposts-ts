"use client"

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

export default function Submitbutton() {
  const { pending } = useFormStatus()

  return (
    <Button className="w-fit cursor-pointer" type="submit" disabled={pending}>
      {pending ? "Enviando" : "Enviar"}
    </Button>
  )
}