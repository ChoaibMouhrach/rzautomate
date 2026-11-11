import { Clock, Mail } from "lucide-react";
import { FreeText } from "@/components/ui/free-text";
import { site } from "@/lib/site";
import { book } from "./content";

const embedUrl = `${site.bookingUrl}?embed=true&layout=month_view&theme=light`;

export const Book = () => (
  <section id="book" className="scroll-mt-16 bg-ink py-16 text-paper md:py-28">
    <div className="page-container grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="text-sm font-medium text-paper/60">
          <FreeText>{book.eyebrow}</FreeText>
        </p>
        <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
          {book.plain}
          <span className="text-paper/50">{book.muted}</span>
        </h2>
        <p className="mt-6 max-w-lg text-lg text-paper/70">{book.body}</p>
        <dl className="mt-10 grid gap-6">
          <div className="flex items-center gap-4">
            <span className="flex size-11 items-center justify-center rounded-full bg-white/10">
              <Mail aria-hidden className="size-5" />
            </span>
            <div>
              <dt className="text-sm text-paper/60">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex size-11 items-center justify-center rounded-full bg-white/10">
              <Clock aria-hidden className="size-5" />
            </span>
            <div>
              <dt className="text-sm text-paper/60">{book.planLabel}</dt>
              <dd>{book.plan}</dd>
            </div>
          </div>
        </dl>
      </div>
      <div className="overflow-hidden rounded-2xl bg-paper text-ink">
        <iframe
          src={embedUrl}
          title={book.embedTitle}
          loading="lazy"
          className="h-[44rem] w-full border-0"
        />
      </div>
    </div>
  </section>
);
