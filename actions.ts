"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "./lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  // Verificar si no hay un usuario autenticado
  if (!user) return redirect("/api/auth/register")
  
  // Obtener los datos del formulario mediante el atributo name
  const title = formData.get("title")
  const content = formData.get("content")
  const url = formData.get("url")

  // Para validar los datos se puede utilizar Zod y evitar colocar "as"
  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user.id,
      authorImage: user.picture as string,
      authorName: user.given_name as string,
    },
  })

  revalidatePath("/") // Revalidar el path

  return redirect("/dashboard")
}