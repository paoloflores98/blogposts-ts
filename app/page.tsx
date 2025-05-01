import { prisma } from "@/lib/prisma"

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      // authorId: true,
      createdAt: true,
      updatedAt: true,
    }
  })

  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Últimos posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {data.map(item => (

          ))} */}
      </div>
    </div>
  )
}
