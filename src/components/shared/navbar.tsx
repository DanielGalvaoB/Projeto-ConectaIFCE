import { Button } from "@/components/ui/button"
import Brand from "./brand"


function Navbar(){
  return(
    <header className="sticky top-0 border-b border-border z-50 bg-card/80 backdrop-blur-md">
      <nav className="container-main flex items-center justify-between py-3">
        {/* <a href="/">Logo</a> */}
        <a href="">
          <Brand />
        </a>

        <div className="flex gap-4 lg:gap-8">
          <a href="/" className="text-muted-foreground font-medium hover:text-primary">Inicio</a>
          <a href="/#feature-section" className="text-muted-foreground font-medium hover:text-primary">Recursos</a>
          <a href="/#faq-section" className="text-muted-foreground font-medium hover:text-primary">Perguntas Frequentes</a>
        </div>


        <div>

          <Button variant={'ghost'} size="lg" asChild>
            <a href="/login">Entrar</a>
          </Button>
          <Button size={"lg"} asChild>
            <a href="/registrar">Criar Conta</a>
          </Button>


        </div>
      </nav>
    </header>
  )
}


export default Navbar
