import type { SVGProps } from "react";
import { site } from "@/lib/site";
import { tv } from "@/lib/ui";

const logo = tv({ base: "h-6 w-auto fill-primary" });

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1111 542"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={site.name}
      className={logo({ className })}
      {...props}
    >
      <path d="M0 2H468C563 2 648 72 648 167C648 237 603 287 520 339L435 252L471 229C493 218 506 192 506 167C506 144 486 128 463 128H118C93 128 71 113 56 90L0 2Z" />
      <path d="M44 542H181V387C181 362 198 347 221 347H253C268 347 283 354 293 363L438 515C458 532 483 542 508 542H658L393 272C368 245 343 230 313 230H191C113 230 44 297 44 377V542Z" />
      <path d="M591 0H1061C1089 0 1111 23 1111 52C1111 71 1103 87 1089 99L696 423C693 427 697 430 705 430H1020C1025 430 1029 433 1031 437L1100 542H728C718 542 710 539 703 532L553 377L858 120H715C707 120 701 117 698 113L591 0Z" />
    </svg>
  );
}
