import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "@/lib/prisma"
import BlogpostCard from "@/components/general/BlogpostCard"

async function getData(userId: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return data
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const data = await getData(user!.id)

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Artículos de tu blog</h2>

        <Link className={buttonVariants()} href="/dashboard/create">
          Crear post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BlogpostCard // Componente
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </>
  )
}