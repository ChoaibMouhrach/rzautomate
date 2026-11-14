const logos: Record<string, { src: string; invert?: boolean }> = {
  Anthropic: { src: "/logos/anthropic.svg", invert: true },
  OpenAI: { src: "/logos/openai.svg", invert: true },
  Google: { src: "/logos/gemini.svg" },
  xAI: { src: "/logos/xai.svg", invert: true },
  DeepSeek: { src: "/logos/deepseek.svg" },
  Moonshot: { src: "/logos/moonshot.svg" },
  Alibaba: { src: "/logos/alibaba.svg" },
  Meta: { src: "/logos/meta.svg" },
};

export const ProviderLogo = ({ provider, className = "size-6" }: { provider: string; className?: string }) => {
  const logo = logos[provider];
  if (!logo) return null;
  return <img src={logo.src} alt="" width={24} height={24} loading="lazy" className={`${className} shrink-0 object-contain ${logo.invert ? "dark:invert" : ""}`} />;
};

export const ProviderChip = ({ provider, className = "size-12", logoClassName = "size-7" }: { provider: string; className?: string; logoClassName?: string }) => (
  <span className={`flex shrink-0 items-center justify-center rounded-full bg-background ${className}`}>
    <ProviderLogo provider={provider} className={logoClassName} />
  </span>
);
