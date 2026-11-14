import { activepieces } from "./activepieces";
import { gumloop } from "./gumloop";
import { ifttt } from "./ifttt";
import { integrately } from "./integrately";
import { lindy } from "./lindy";
import { make } from "./make";
import { n8n } from "./n8n";
import { pabblyConnect } from "./pabbly-connect";
import { pipedream } from "./pipedream";
import { powerAutomate } from "./power-automate";
import { relay } from "./relay";
import { tray } from "./tray";
import type { ToolPage } from "./types";
import { workato } from "./workato";
import { zapier } from "./zapier";

export const toolPages: readonly ToolPage[] = [
  n8n,
  zapier,
  make,
  powerAutomate,
  activepieces,
  pipedream,
  pabblyConnect,
  integrately,
  ifttt,
  gumloop,
  lindy,
  relay,
  workato,
  tray,
];

export const getToolPage = (slug: string) => toolPages.find((page) => page.slug === slug)!;
