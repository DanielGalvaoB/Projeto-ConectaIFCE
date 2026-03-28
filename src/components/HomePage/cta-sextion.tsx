import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

function CtaSextion() {
  return (
    <section className="bg-card py-20">
      <div className="container-main">

        <div className="mx-auto text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-balance text-foreground tracking-tight mt-3">
          Pronto para se conectar?
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <Button size={'lg'} asChild>
            <a href="/register" className="flex gap-2 items-center w-60 h-12">
              <span className="uppercase tracking-wider">
                Participar agora
              </span>
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant={'ghost'} size="lg" asChild>
            <a href="/login" className="w-40 h-12">Já tem conta?</a>
          </Button>

        </div>

      </div>
    </section>
  )
}

export default CtaSextion

