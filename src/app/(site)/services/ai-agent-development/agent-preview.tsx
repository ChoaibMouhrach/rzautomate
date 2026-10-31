import { Card, CardDescription, CardEyebrow, CardTitle } from "@/components/ui/card";

export function AgentPreview() {
  return (
    <figure className="page-container pb-16">
      <figcaption className="mb-4 text-center text-sm text-muted-foreground">
        Illustrative workflow · sample data
      </figcaption>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardEyebrow>01 / Ask in Slack</CardEyebrow>
          <CardTitle>Answers with sources</CardTitle>
          <p className="rounded-ui bg-muted p-4 text-sm">What&apos;s our refund policy for annual plans?</p>
          <CardDescription>The assistant searches the policy and links the sections behind its answer. If the docs don&apos;t cover it, it says so.</CardDescription>
          <p className="text-sm text-muted-foreground">Sources: Pricing policy.pdf · Help center: Refunds</p>
        </Card>
        <Card>
          <CardEyebrow>02 / Claude + MCP</CardEyebrow>
          <CardTitle>Drafts before it acts</CardTitle>
          <p className="rounded-ui bg-muted p-4 text-sm">Look up Acme Studio and draft a follow-up task.</p>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Search CRM</li><li>Read the last three notes</li><li>Draft a task for review</li>
          </ol>
          <p className="text-sm font-medium">Waiting for approval</p>
        </Card>
        <Card>
          <CardEyebrow>03 / Run log</CardEyebrow>
          <CardTitle>A record of every run</CardTitle>
          <CardDescription>See the question, sources, tool calls, approval status and model cost together.</CardDescription>
          <dl className="grid grid-cols-2 gap-3 rounded-ui bg-muted p-4 text-sm">
            <dt className="text-muted-foreground">Sources</dt><dd>Policy + CRM notes</dd>
            <dt className="text-muted-foreground">Action</dt><dd>Draft only</dd>
            <dt className="text-muted-foreground">CRM write</dt><dd>Pending approval</dd>
          </dl>
        </Card>
      </div>
    </figure>
  );
}
