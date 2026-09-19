import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const jump = (id: string) => { setOpen(false); document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled || open ? "border-b border-border bg-background/90 shadow-2xl backdrop-blur-xl" : "bg-transparent"}`}>
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <button onClick={() => jump("#inicio")} className="group flex items-center gap-3" aria-label="Veloce — início">
        <span className="grid size-10 place-items-center border border-primary/60 text-primary transition-transform group-hover:rotate-3"><span className="font-display text-xl font-semibold italic">V</span></span>
        <span className="text-left"><span className="block font-display text-xl font-semibold leading-none text-foreground">VELOCE</span><span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-primary">Executive Vans</span></span>
      </button>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
        {navItems.map(([label,id]) => <button key={id} onClick={() => jump(id)} className="text-xs font-medium text-foreground/75 transition-colors hover:text-primary">{label}</button>)}
      </nav>
      <Button onClick={() => jump("#orcamento")} className="hidden h-11 bg-primary px-5 text-primary-foreground hover:bg-primary/90 lg:inline-flex">Solicitar orçamento</Button>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X/> : <Menu/>}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden">{navItems.map(([label,id]) => <button key={id} onClick={() => jump(id)} className="block w-full border-b border-border py-3 text-left text-sm text-foreground">{label}</button>)}<Button onClick={() => jump("#orcamento")} className="mt-5 w-full">Solicitar orçamento</Button></nav>}
  </header>;
}
