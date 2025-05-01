import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
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

        <Button>Iniciar sesión</Button>
        <Button variant="secondary">Registrarse</Button>
      </div>
    </nav>
  )
}