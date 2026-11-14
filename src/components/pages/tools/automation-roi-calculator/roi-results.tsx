import { Check, Link2 } from "lucide-react";
import { Link, LinkButton } from "@/components/ui/link";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";
import {
  calcRoi,
  formatFteLabel,
  formatHours,
  formatMoney,
  formatPayback,
  formatRoi,
  taskService,
  toSearchParams,
  type RoiInputs,
} from "@/lib/roi";
import { Tween } from "@/components/pages/tools/automation-roi-calculator/tween";

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-baseline justify-between gap-6 py-3">
    <dt className="text-paper/60">{label}</dt>
    <dd className="text-right text-lg font-semibold tracking-tight">{children}</dd>
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <p className="rounded-2xl bg-white/10 p-4 text-sm leading-relaxed">{children}</p>
);

const CopyLink = ({ inputs }: { inputs: RoiInputs }) => {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() =>
        copy(
          `${window.location.origin}${window.location.pathname}?${toSearchParams(inputs)}`,
        )
      }
      className="inline-flex cursor-pointer items-center gap-2 rounded-sm text-sm font-medium text-paper underline-offset-4 outline-ring hover:underline focus-visible:outline-2"
    >
      {isCopied ? (
        <Check aria-hidden className="size-4 text-green-500" />
      ) : (
        <Link2 aria-hidden className="size-4" />
      )}
      {isCopied ? "Link copied" : "Copy link to this result"}
    </button>
  );
};

export const RoiResults = ({ inputs }: { inputs: RoiInputs }) => {
  const result = calcRoi(inputs);
  const bookHref = `/book?service=${taskService[inputs.task]}&source=roi-calculator`;
  const showNumbers = !result.hasNothingToSave;
  const showPayback = result.paybackMonths !== null;

  return (
    <section
      aria-label="Your result"
      className="flex flex-col gap-6 rounded-3xl bg-ink p-6 text-paper sm:p-8 lg:sticky lg:top-28"
    >
      {!showNumbers ? (
        <Note>Nothing to save yet. Adjust the numbers on the left.</Note>
      ) : (
        <>
          <div>
            <p className="text-sm font-medium text-paper/60">
              Back to your business each year
            </p>
            <p
              aria-live="polite"
              className="mt-2 text-6xl font-semibold leading-none tracking-tighter text-primary md:text-7xl"
            >
              <Tween value={result.valueYear} format={formatMoney} />
            </p>
          </div>

          <p className="text-paper/70">
            Doing this {result.volume.toLocaleString("en-US")} times a month by
            hand takes about {formatHours(result.manualHoursMonth)} hours.
            Automating {result.share}% of it gives back about{" "}
            {formatHours(result.hoursSavedMonth)} hours a month, worth{" "}
            {formatMoney(result.valueMonth)}, or {formatMoney(result.valueYear)}{" "}
            a year.
          </p>

          <dl>
            <Row label="Hours saved a month">
              <Tween value={result.hoursSavedMonth} format={formatHours} />
            </Row>
            <Row label="Hours saved a year">
              <Tween value={result.hoursSavedYear} format={formatHours} />
            </Row>
            <Row label="After running costs, per year">
              <Tween value={result.netYear} format={formatMoney} />
            </Row>
            <Row label="Share of a full-time role">
              {formatFteLabel(result.fte)}
            </Row>
            {showPayback && (
              <Row label="Pays for itself in">
                {formatPayback(result.paybackMonths ?? 0)}
              </Row>
            )}
            {showPayback && result.roiYear1 !== null && (
              <Row label="First-year return">{formatRoi(result.roiYear1)}</Row>
            )}
          </dl>

          {result.netMonth <= 0 && (
            <Note>
              At this volume, the running cost is higher than the time saved.
              That's worth knowing before you build anything. Try a higher
              volume, or book a call and we'll look at whether combining tasks
              changes the math.
            </Note>
          )}
          {result.fte >= 1 && (
            <Note>
              This task alone is worth more than a full-time role. Growth like
              this usually means a new hire, unless it's automated.
            </Note>
          )}
          {result.paybackMonths !== null && result.paybackMonths > 36 && (
            <Note>
              Payback is over three years. A smaller first build, or automating
              a bigger task first, usually makes more sense.
            </Note>
          )}
          {result.growth > 0 && (
            <p className="text-paper/70">
              If this task grows {result.growth}% over the next year, it will
              need about {formatHours(result.endOfYearHoursMonth)} hours a month
              by hand. That's {formatFteLabel(result.fte)} you won't need to
              hire for if it's automated.
            </p>
          )}
        </>
      )}

      <div className="flex flex-col items-start gap-4">
        <LinkButton href={bookHref} size="lg" className="w-full sm:w-auto">
          Book a free 30-min call
        </LinkButton>
        <CopyLink inputs={inputs} />
      </div>
      <p className="text-sm text-paper/60">
        Not sure which tool to use?{" "}
        <Link href="/automation-tools" className="text-paper">Compare automation tool pricing</Link>.
      </p>
    </section>
  );
};
