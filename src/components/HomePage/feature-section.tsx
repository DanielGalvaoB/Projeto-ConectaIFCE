import { Card, CardContent } from "../ui/card"
import { BookOpen, FolderSearch, Trophy, Users,} from "lucide-react"

const features = [
  {
    icon: Users,
    title: 'Faça parte da rede',
    description: 'Conecte-se com colegas de curso, professores e tecnicos do IFCE. Amplie sua rede de contatos acadêmicos.',
  },
  {
    icon: FolderSearch,
    title: 'Encontre parceiros',
    description: 'Descubra pessoas com interesses semelhantes para formar grupos de estudo e desenvolver projetos colaborativos.',
  },
  {
    icon: Trophy,
    title: 'Compartilhe conquistas',
    description: 'Celebre suas vitórias acadêmicas, compartilhe projetos e inspire outros membros da comunidade.',
  },
  {
    icon: BookOpen,
    title: 'Divulgue pesquisas',
    description: 'Publique artigos, apresente seus projetos e enconte colaboradores para novas ideias.',
  }
]

function FeatureSection() {
  return (
    <div>
      <section className="bg-background py-20">
        <div className="container-main">
          <div className="mx-auto text-center max-w-2xl">
            <p className="text-primary uppercase tracking-wide font-semibold text-sm">
              Por que participar
            </p>
            <h2 className="text-4xl font-bold text-balance text-foreground tracking-tight mt-3">
              Tudo que você precisa para crescer na vida acadêmica
            </h2>
            <p className="mt-4 text-balance text-lg text-muted-foreground">
              Networking e recursos para impulsionar sua jornada no IFCE.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-4 gap-6">
            {
            features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <CardContent className="flex flex-col px-6">
                <div className="flex items-center justify-center size-10 bg-primary/10 rounded-lg">
                  <feature.icon className=" size-5 text-primary"/>
                </div>
                <h3 className="text-lg mt-4 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-balance leading-relaxed mt-2">{feature.description}</p>

              </CardContent>
            </Card>
            ))
            }

          </div>

        </div>
      </section>
    </div>
  )
}

export default FeatureSection
