const bar = document.createElement("div");
bar.setAttribute("aria-hidden", "true");
Object.assign(bar.style, {
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "100",
  height: "3px",
  width: "0",
  background: "var(--primary)",
  opacity: "0",
  pointerEvents: "none",
  transition: "width 200ms ease-out, opacity 200ms ease-out",
});
document.documentElement.appendChild(bar);

let progress = 0;
let trickle: number | undefined;
let hideTimer: number | undefined;

function set(value: number) {
  progress = value;
  bar.style.width = `${value}%`;
}

function start() {
  window.clearTimeout(hideTimer);
  window.clearInterval(trickle);
  bar.style.transition = "none";
  set(0);
  void bar.offsetWidth;
  bar.style.transition = "width 200ms ease-out, opacity 200ms ease-out";
  bar.style.opacity = "1";
  set(8);
  trickle = window.setInterval(() => {
    set(progress + (90 - progress) * 0.1);
  }, 200);
}

function done() {
  window.clearInterval(trickle);
  set(100);
  hideTimer = window.setTimeout(() => {
    bar.style.opacity = "0";
  }, 200);
}

document.addEventListener("astro:before-preparation", start);
document.addEventListener("astro:page-load", done);
