import { handleSubmission } from "@/actions"
import Submitbutton from "@/components/general/Submitbutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CreateBlogroute() {
  return (
    <div className="">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Crear Post</CardTitle>
          <CardDescription>
            Crear un nuevo post para compartir con el mundo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
          {/* <form className="flex flex-col gap-4"> */}
            <div className="flex flex-col gap-2">
              <Label>Título</Label>
              <Input name="title" required type="text" placeholder="Título" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Contenido</Label>
              <Textarea name="content" required placeholder="Contenido" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Imagen URL</Label>
              <Input name="url" required type="url" placeholder="Imagen URL" />
            </div>

            <Submitbutton /> {/* Componente */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}