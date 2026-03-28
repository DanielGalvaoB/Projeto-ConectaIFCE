
import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react"
import { Button } from "../ui/button"


function HeroSection() {
  return (
    <div>
      <section className="bg-card bg-soft-radial">
        <div className="container-main flex flex-col items-center text-center py-20">
          <div className="flex bg-muted border border-border py-1.5 px-4 items-center gap-2 rounded-full text-sm">
            <SparkleIcon className="text-primary size-3.5"/>
            <span className="text-muted-foreground">Rede Social Academica do IFCE</span>
          </div>

          <h1 className=" mt-6 text-6xl text-balance font-bold text-foreground tracking-tight">
            Conecte-se, colabore e{' '} <span className="text-primary">cresça juntus</span> com a comunidade acadêmica do IFCE!
          </h1>

          <p className="mt-6 text-muted-foreground text-xl text-balance">
            A plataforma que une alunos, professores e tecnicos para compartilhar projetos, formar grupos de estudo e celebrar conquistas academicas.
          </p>

          <Button className='mt-10' size="lg" asChild>
            <a href="/register" className=" flex gap-2 items-center w-60 h-12">
            <span className="uppercase tracking-wider">Participar agora</span>
            <ArrowRightIcon className="size-4"/>
            </a>
          </Button>

          <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span className="text-foreground font-bold text-2xl">2.500+</span>
              <span>Estudantes</span>
            </div>

            <div className="h-8 w-px bg-border"></div>

            <div className="flex flex-col gap-1">
              <span className="text-foreground font-bold text-2xl">32</span>
              <span>Campi</span>
            </div>

            <div className="h-8 w-px bg-border"></div>

            <div className="flex flex-col gap-1">
              <span className="text-foreground font-bold text-2xl">50+</span>
              <span>Grupos</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default HeroSection
