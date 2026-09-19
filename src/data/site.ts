import { BriefcaseBusiness, CalendarDays, Church, Map, Plane, Route, Users } from "lucide-react";

export const navItems = [
  ["Início", "#inicio"], ["Serviços", "#servicos"], ["Frota", "#frota"],
  ["Empresas", "#empresas"], ["Sobre", "#sobre"], ["Avaliações", "#avaliacoes"], ["Contato", "#contato"],
] as const;

export const services = [
  { title: "Transfer Aeroporto", icon: Plane, text: "Recepção com placa, monitoramento de voo e espera cortesia para chegadas tranquilas." },
  { title: "Transporte Corporativo", icon: BriefcaseBusiness, text: "Mobilidade para executivos, equipes e convidados com gestão centralizada." },
  { title: "Eventos", icon: CalendarDays, text: "Logística coordenada para congressos, feiras, shows e celebrações." },
  { title: "Casamentos", icon: Church, text: "Deslocamentos elegantes e pontuais para noivos, familiares e convidados." },
  { title: "Viagens", icon: Route, text: "Rotas interestaduais com planejamento, conforto e paradas personalizadas." },
  { title: "Turismo", icon: Map, text: "Roteiros privativos com flexibilidade e atendimento personalizado." },
  { title: "Transporte para Grupos", icon: Users, text: "A solução certa para grupos pequenos e grandes, sem abrir mão do conforto." },
];

export const fleet = [
  { name: "Sprinter Luxo", seats: "15 passageiros", luggage: "12 malas", subtitle: "Executiva, espaçosa e versátil" },
  { name: "Sprinter VIP", seats: "19 passageiros", luggage: "16 malas", subtitle: "Capacidade com padrão premium" },
  { name: "Van Executive Prime", seats: "10 passageiros", luggage: "10 malas", subtitle: "Experiência reservada e exclusiva" },
];

export const testimonials = [
  { quote: "Pontualidade impecável e uma atenção aos detalhes que fez toda a diferença para nossa diretoria.", name: "Marina A.", role: "Diretora de Operações" },
  { quote: "Do aeroporto ao hotel, tudo foi extremamente organizado. A van estava impecável e o motorista, muito cordial.", name: "Eduardo M.", role: "Viagem em família" },
  { quote: "A Veloce assumiu toda a logística do congresso e nos manteve informados em cada etapa. Serviço excelente.", name: "Renata C.", role: "Eventos Corporativos" },
];

export const faqs = [
  ["Quanto de bagagem posso levar?", "A capacidade depende do veículo e do número de passageiros. Indicamos o modelo ideal após conhecer malas e volumes especiais."],
  ["Como funciona o cancelamento?", "As condições são informadas na proposta e variam conforme antecedência, destino e período da reserva."],
  ["Quais cidades são atendidas?", "Atendemos Curitiba, região metropolitana, litoral, aeroportos e viagens sob consulta para outros estados."],
  ["Quais são as formas de pagamento?", "Aceitamos Pix, cartão e faturamento para empresas aprovadas. As condições aparecem na proposta comercial."],
  ["Com quanto tempo devo reservar?", "Recomendamos antecedência, principalmente em feriados e grandes eventos. Também avaliamos solicitações de última hora."],
] as const;
