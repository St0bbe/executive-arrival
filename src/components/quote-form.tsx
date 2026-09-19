import { useState } from "react";
import { ArrowRight, CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { company, openWhatsApp } from "@/data/company";

export function QuoteForm({ selectedVehicle = "" }: { selectedVehicle?: string }) {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    date: "",
    time: "",
    passengers: "",
    service: "Transfer aeroporto",
  });
  const set = (key: keyof typeof form, value: string) =>
    setForm((old) => ({ ...old, [key]: value }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `Olá, ${company.name}! Gostaria de solicitar uma cotação.\n\nEmbarque: ${form.origin}\nDestino: ${form.destination}\nData: ${form.date}\nHorário: ${form.time}\nPassageiros: ${form.passengers}\nServiço: ${form.service}${selectedVehicle ? `\nVeículo de interesse: ${selectedVehicle}` : ""}`,
    );
  };
  return (
    <form onSubmit={submit} className="grid gap-3 lg:grid-cols-12">
      <Field icon={MapPin} label="Local de embarque">
        <Input
          required
          value={form.origin}
          onChange={(e) => set("origin", e.target.value)}
          placeholder="Endereço de origem"
        />
      </Field>
      <Field icon={MapPin} label="Destino">
        <Input
          required
          value={form.destination}
          onChange={(e) => set("destination", e.target.value)}
          placeholder="Para onde vamos?"
        />
      </Field>
      <Field icon={CalendarDays} label="Data" small>
        <Input
          required
          type="date"
          value={form.date}
          onChange={(e) => set("date", e.target.value)}
        />
      </Field>
      <Field icon={Clock3} label="Horário" small>
        <Input
          required
          type="time"
          value={form.time}
          onChange={(e) => set("time", e.target.value)}
        />
      </Field>
      <Field icon={Users} label="Passageiros" small>
        <Input
          required
          min="1"
          type="number"
          value={form.passengers}
          onChange={(e) => set("passengers", e.target.value)}
          placeholder="8"
        />
      </Field>
      <label className="space-y-2 lg:col-span-3">
        <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-muted-foreground">
          Tipo de serviço
        </span>
        <select
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
        >
          <option>Transfer aeroporto</option>
          <option>Transporte empresarial</option>
          <option>Viagem</option>
          <option>Evento</option>
          <option>Casamento</option>
          <option>Turismo</option>
          <option>Transporte personalizado</option>
        </select>
      </label>
      <div className="flex items-end lg:col-span-3">
        <Button type="submit" className="h-11 w-full">
          Solicitar cotação <ArrowRight />
        </Button>
      </div>
    </form>
  );
}
function Field({
  icon: Icon,
  label,
  small,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  small?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`space-y-2 ${small ? "lg:col-span-2" : "lg:col-span-4"}`}>
      <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-muted-foreground">
        <Icon className="size-3.5 text-primary" />
        {label}
      </span>
      {children}
    </label>
  );
}
