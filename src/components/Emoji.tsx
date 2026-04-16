// Renders flag emojis as actual images (Windows doesn't support flag glyphs).
// Other emojis pass through as native unicode.
// Uses flagcdn.com SVG endpoints which scale to any size.

const FLAG_MAP: Record<string, string> = {
  "🇧🇬": "bg",
  "🇪🇺": "eu",
  "🇺🇸": "us",
  "🇷🇴": "ro",
  "🇬🇧": "gb",
  "🇲🇩": "md",
  "🇷🇸": "rs",
  "🇵🇱": "pl",
  "🇷🇺": "ru",
  "🇩🇪": "de",
};

interface Props {
  children: string;
  size?: number; // pixel height for flags (defaults 18)
  className?: string;
}

export function Emoji({ children, size = 18, className }: Props) {
  const code = FLAG_MAP[children];
  if (code) {
    const w = Math.round((size * 4) / 3); // 4:3 flag ratio
    return (
      <img
        src={`https://flagcdn.com/${code}.svg`}
        width={w}
        height={size}
        alt={code.toUpperCase()}
        className={className}
        loading="lazy"
        style={{ display: "inline-block", verticalAlign: "middle", borderRadius: 2, objectFit: "cover" }}
      />
    );
  }
  return <span className={className}>{children}</span>;
}
