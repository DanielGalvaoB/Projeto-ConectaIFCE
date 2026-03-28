
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "../ui/accordion"

const fac = [
  {
    question: 'Quem pode participar do ConectaIFCE?',
    answer: 'Todos os membros da comunidade acadêmica do IFCE, incluindo alunos, professores e técnicos administrativos, são bem-vindos para participar e contribuir com a plataforma.',
  },
  {
    question: 'Como funciona a fromação de grupos de estudo?',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'posso divulgar meus projetos e pesquisas?',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'A plataforma esta diponivel em dispositivos móveis?',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
]
function FacSection() {
  return (
    <section className="bg-card py-20">
      <div className="container-main max-w-3xl">
        <div className="mx-auto text-center">
          <p className="to-primary uppercase text-sm font-semibold tracking-wide text-primary">FAQ</p>
          <h2 className="text-4xl font-bold text-balance text-foreground tracking-tight mt-3">
            Perguntas Frequentes
          </h2>

        </div>

         <Accordion type="single" collapsible className="w-full mt-16">
        {fac.map(item => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="text-base font-medium text-foreground hover:text-primary">
              {item.question}
            </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
               {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>



    </section>
  )
}

export default FacSection
