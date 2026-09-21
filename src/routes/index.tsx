import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Controle Financeiro | Dr Ivan Mendes" },
      { name: "description", content: "Gestão financeira da clínica Dr Ivan Mendes Fisioterapia e Osteopatia." },
      { property: "og:title", content: "Controle Financeiro | Dr Ivan Mendes" },
      { property: "og:description", content: "Gestão financeira da clínica Dr Ivan Mendes Fisioterapia e Osteopatia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/vitta-financeiro.html"
        title="Controle Financeiro Dr Ivan Mendes"
      />
    </main>
  );
}
