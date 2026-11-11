import { logos } from "./content";
import { Marquee } from "./marquee";

export const LogoStrip = () => (
  <section>
    <div className="py-10">
      <p className="text-center text-sm text-muted-foreground">
        {logos.label}
      </p>
      <Marquee
        pauseOnHover
        className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        {logos.items.map((logo) => (
          <div key={logo.name} className="group/logo flex items-center px-4 py-3">
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className={`${logo.height} w-auto max-w-none opacity-70 grayscale transition-[filter,opacity] duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);
