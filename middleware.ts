import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"

export default withAuth(
  async function middleware() {},
  {
    // El middleware sigue funcionando en todas las rutas, pero no protege la ruta del "/"
    // Proteger todas las rutas exceptos las que se mencionan en el middleware
    publicPaths: ["/"],
  }
)

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}