import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function Navbar() {
  // Obtener el usuario autenticado
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">Flores</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/"
          >Inicio</Link>

          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/dashboard"
          >Dashboard</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user
          ? (
            <>
              <p>{user.given_name}</p>

              <LogoutLink className={buttonVariants({ variant: "secondary" })}>Cerrar sesión</LogoutLink>
            </>
          )

          : (
            <>
              {/* Usar el botón de Kinde para inicar sesión */}
              <LoginLink className={buttonVariants()}>Iniciar sesión</LoginLink>
      
              {/* Usar el botón de Kinde para registrarse */}
              <RegisterLink className={buttonVariants({ variant: "secondary" })}>Registrarse</RegisterLink>
            </>
          )
        }
      </div>
    </nav>
  )
}