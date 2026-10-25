import { CalendarDays, Mail } from "lucide-react";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { LinkButton } from "@/components/ui/link";
import { TextField } from "@/components/ui/text-field";
import { site } from "@/lib/site";

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-10 items-center justify-center rounded-ui border border-border bg-muted text-foreground">
      {children}
    </span>
  );
}

export function ContactOptions() {
  return (
    <section aria-label="Ways to reach us">
      <h2 className="sr-only">Ways to reach us</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="gap-4 p-8">
          <IconTile>
            <Mail aria-hidden className="size-5" />
          </IconTile>
          <div>
            <CardTitle>Send us an email</CardTitle>
            <CardDescription className="mt-2">
              Describe what you want to automate and we will reply within one
              business day.
            </CardDescription>
          </div>
          <div className="mt-auto flex items-start gap-2 pt-4">
            <TextField
              aria-label="Email address"
              value={site.email}
              isReadOnly
              className="flex-1"
            />
            <CopyButton text={site.email} label="Copy email address" />
          </div>
        </Card>

        <Card className="gap-4 p-8">
          <IconTile>
            <CalendarDays aria-hidden className="size-5" />
          </IconTile>
          <div>
            <CardTitle>Book a call</CardTitle>
            <CardDescription className="mt-2">
              Pick a time that suits you for a{" "}
              <span className="text-primary">free</span> 30-minute call{" "}
              <span className="text-primary">with no commitment</span>, and we
              will talk through your workflow.
            </CardDescription>
          </div>
          <div className="mt-auto pt-4">
            <LinkButton
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30 minutes free discovery call
              <span className="sr-only"> (opens in a new tab)</span>
            </LinkButton>
          </div>
        </Card>
      </div>
    </section>
  );
}
