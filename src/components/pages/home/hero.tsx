import { BookCallButton } from "./book-call-button";
import { hero } from "./content";

const delay = (seconds: number) => ({ animationDelay: `${seconds}s` });

export const Hero = () => (
  <section className="relative isolate -mt-24 flex min-h-[80svh] items-center overflow-hidden pt-24">
    <img
      src="/hero-bg.jpg"
      alt=""
      fetchPriority="high"
      className="absolute inset-0 -z-20 size-full object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-black/40" />
    <div className="page-container py-20 text-left text-white">
      <h1
        className="animate-fade-slide-in max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        style={delay(0.1)}
      >
        {hero.title}
      </h1>
      <p
        className="animate-fade-slide-in mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        style={delay(0.2)}
      >
        {hero.description}
      </p>
      <div
        className="animate-fade-slide-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        style={delay(0.3)}
      >
        <BookCallButton size="lg" />
      </div>
    </div>
  </section>
);
