import Header from "@/components/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <div className="flex flex-col min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full">
        <div className="flex flex-1 overflow-hidden h-full">
          <main className="flex-1 overflow-y-auto p-0 lg:p-4">{children}</main>
        </div>
      </div>
    </section>
  );
}
