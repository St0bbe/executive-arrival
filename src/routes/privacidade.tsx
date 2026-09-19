import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { company } from "@/data/company";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [{ title: `Política de Privacidade | ${company.name}` }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <article className="mx-auto max-w-3xl">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="size-4" /> Voltar ao site
        </Link>
        <p className="eyebrow">MJG Transportes</p>
        <h1 className="font-display text-5xl">Política de Privacidade</h1>
        <div className="mt-10 space-y-7 leading-relaxed text-muted-foreground">
          <p>
            Esta política explica como tratamos os dados fornecidos ao solicitar informações ou uma
            cotação.
          </p>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Dados fornecidos</h2>
            <p>
              Podemos receber nome, telefone, e-mail, origem, destino, data, horário, quantidade de
              passageiros e os detalhes enviados voluntariamente pelo usuário.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Finalidade</h2>
            <p>
              As informações são utilizadas para responder ao contato, preparar cotações, organizar
              o atendimento solicitado e manter a comunicação relacionada ao serviço.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">WhatsApp</h2>
            <p>
              Ao usar os botões de contato, os dados preenchidos são preparados em uma mensagem e
              enviados apenas após a confirmação do usuário no WhatsApp. Aplicam-se também as
              políticas da plataforma.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Compartilhamento e segurança
            </h2>
            <p>
              Não comercializamos dados pessoais. O acesso é limitado ao necessário para o
              atendimento, observando medidas razoáveis de segurança e as obrigações legais
              aplicáveis.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Direitos do titular</h2>
            <p>
              O titular pode solicitar confirmação, acesso, correção ou exclusão de seus dados pelo
              canal de atendimento disponibilizado no site, respeitadas as hipóteses legais de
              conservação.
            </p>
          </section>
          <p className="text-xs">Última atualização: setembro de 2026.</p>
        </div>
      </article>
    </main>
  );
}
