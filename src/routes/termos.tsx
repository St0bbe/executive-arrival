import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { company } from "@/data/company";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [{ title: `Termos de Uso | ${company.name}` }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <article className="mx-auto max-w-3xl">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="size-4" /> Voltar ao site
        </Link>
        <p className="eyebrow">MJG Transportes</p>
        <h1 className="font-display text-5xl">Termos de Uso</h1>
        <div className="mt-10 space-y-7 leading-relaxed text-muted-foreground">
          <p>Ao utilizar este site, você concorda com os termos abaixo.</p>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Finalidade do site</h2>
            <p>
              O site apresenta os serviços da MJG Transportes e facilita pedidos de informação e
              cotação. O envio de uma solicitação não confirma automaticamente uma reserva.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Cotações e reservas</h2>
            <p>
              Valores, disponibilidade, veículo, horários, itinerários e condições são confirmados
              individualmente. A contratação somente é concluída após aceite das condições
              informadas pela empresa.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Informações do usuário</h2>
            <p>
              O usuário deve fornecer dados corretos sobre passageiros, bagagens, origem, destino e
              demais necessidades que possam afetar a prestação do serviço.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Conteúdo</h2>
            <p>
              Imagens e simulações podem ser ilustrativas. As características do veículo e do
              atendimento contratado serão as descritas na proposta confirmada.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Alterações</h2>
            <p>
              Estes termos podem ser atualizados para refletir mudanças no site, nos serviços ou na
              legislação aplicável.
            </p>
          </section>
          <p className="text-xs">Última atualização: setembro de 2026.</p>
        </div>
      </article>
    </main>
  );
}
