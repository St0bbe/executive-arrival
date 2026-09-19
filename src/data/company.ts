export const company = {
  name: "MJG Transportes",
  shortName: "MJG",
  tagline: "Transporte Executivo",
  city: "Curitiba e região",
  serviceArea: "Curitiba, região metropolitana e viagens sob consulta",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "5541999646436",
  siteUrl: import.meta.env.VITE_SITE_URL ?? "",
} as const;

export function getWhatsAppUrl(message: string) {
  const destination = company.whatsappNumber
    ? `https://wa.me/${company.whatsappNumber}`
    : "https://wa.me/";

  return `${destination}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
