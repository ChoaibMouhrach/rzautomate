import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { NotFoundContent } from "@/components/site/not-found-content";

export const metadata: Metadata = {
  title: "Page not found",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
