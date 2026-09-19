import { BriefcaseBusiness, CalendarDays, Church, Map, Plane, Route, Users } from "lucide-react";

export const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Frota", "#frota"],
  ["Empresas", "#empresas"],
  ["Sobre", "#sobre"],
  ["Avaliações", "#avaliacoes"],
  ["Contato", "#contato"],
] as const;

export const services = [
  {
    title: "Transfer Aeroporto",
    icon: Plane,
    text: "Transfers planejados para aeroportos, com ponto de encontro e horários combinados.",
  },
  {
    title: "Transporte Corporativo",
    icon: BriefcaseBusiness,
    text: "Mobilidade para executivos, equipes e convidados conforme a necessidade da empresa.",
  },
  {
    title: "Eventos",
    icon: CalendarDays,
    text: "Logística coordenada para congressos, feiras, shows e celebrações.",
  },
  {
    title: "Casamentos",
    icon: Church,
    text: "Deslocamentos elegantes e pontuais para noivos, familiares e convidados.",
  },
  {
    title: "Viagens",
    icon: Route,
    text: "Rotas interestaduais com planejamento, conforto e paradas personalizadas.",
  },
  {
    title: "Turismo",
    icon: Map,
    text: "Roteiros privativos com flexibilidade e atendimento personalizado.",
  },
  {
    title: "Transporte para Grupos",
    icon: Users,
    text: "A solução certa para grupos pequenos e grandes, sem abrir mão do conforto.",
  },
];

export const fleet = [
  {
    name: "Van Executiva",
    seats: "Capacidade sob consulta",
    luggage: "Bagagens sob consulta",
    subtitle: "Conforto e versatilidade para seu trajeto",
  },
  {
    name: "Van para Grupos",
    seats: "Conforme disponibilidade",
    luggage: "Conforme o grupo",
    subtitle: "Espaço e organização para viagens em grupo",
  },
  {
    name: "Transporte Personalizado",
    seats: "Configuração sob medida",
    luggage: "Planejamento antecipado",
    subtitle: "Uma solução alinhada às necessidades da viagem",
  },
];

export const testimonials = [
  {
    quote: "Atendimento atencioso, conforto e organização em todos os detalhes da viagem.",
    name: "Atendimento",
    role: "Compromisso MJG",
  },
  {
    quote:
      "Uma experiência tranquila do embarque ao destino, com comunicação clara durante todo o atendimento.",
    name: "Transparência",
    role: "Compromisso MJG",
  },
  {
    quote:
      "Uma solução prática para organizar o deslocamento do seu grupo com comodidade e cuidado.",
    name: "Planejamento",
    role: "Compromisso MJG",
  },
];

export const faqs = [
  [
    "Quanto de bagagem posso levar?",
    "A capacidade depende do veículo e do número de passageiros. Indicamos o modelo ideal após conhecer malas e volumes especiais.",
  ],
  [
    "Como funciona o cancelamento?",
    "As condições são informadas na proposta e variam conforme antecedência, destino e período da reserva.",
  ],
  [
    "Quais cidades são atendidas?",
    "Atendemos Curitiba, região metropolitana, litoral, aeroportos e viagens sob consulta para outros estados.",
  ],
  [
    "Quais são as formas de pagamento?",
    "Aceitamos Pix, cartão e faturamento para empresas aprovadas. As condições aparecem na proposta comercial.",
  ],
  [
    "Com quanto tempo devo reservar?",
    "Recomendamos antecedência, principalmente em feriados e grandes eventos. Também avaliamos solicitações de última hora.",
  ],
] as const;
