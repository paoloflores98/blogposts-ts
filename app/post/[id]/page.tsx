import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{
    id: string
  }>
}

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  })

  // Retornar a la página NotFound si no encuentra el ID del post
  if (!data) return notFound()

  return data
}

export default async function PostIdPage({ params }: Props) {
  const { id } = await params
  const data = await getData(id)

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link className={buttonVariants({ variant: "secondary" })} href="/">
        <ChevronLeft />
        Volver
      </Link>

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                className="object-cover"
                src={data.authorImage}
                alt={data.authorName}
                fill
              />
            </div>

            <p className="font-medium">{data.authorName}</p>
          </div>

          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(data.createdAt)}
          </p>
        </div>
      </div>

      <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
        {/* priority: Priorizar la carga de la imagen en el renderizado */}
        <Image
          className="object-cover"
          src={data.imageUrl}
          alt={data.title}
          fill
          priority
        />
      </div>

      <Card>
        <CardContent>
          <p className="text-gray-700">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  )
}