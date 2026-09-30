/** Decorative 3D-style shapes (gradients fake the rendered look). All aria-hidden. */

type Tone = "lime" | "white";
type ShapeProps = { className?: string; tone?: Tone };

const stops: Record<Tone, [string, string, string]> = {
  lime: ["#f1ff7a", "#d0f70c", "#98b800"],
  white: ["#ffffff", "#f3f4f6", "#c9ccd4"],
};

function Grad({ id, tone, angle = 0 }: { id: string; tone: Tone; angle?: number }) {
  const [a, b, c] = stops[tone];
  return (
    <linearGradient id={id} gradientTransform={`rotate(${angle} .5 .5)`}>
      <stop offset="0" stopColor={a} />
      <stop offset=".55" stopColor={b} />
      <stop offset="1" stopColor={c} />
    </linearGradient>
  );
}

/** A springy coil – the squiggle seen across the design. */
export function Coil({ className = "", tone = "lime" }: ShapeProps) {
  const id = `coil-${tone}`;
  const d = "M40 36 C130 10 170 40 110 62 C40 88 30 100 110 110 C190 120 150 150 80 162 C20 172 60 196 150 190";
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" aria-hidden>
      <defs><Grad id={id} tone={tone} angle={70} /></defs>
      <path d={d} stroke={stops[tone][2]} strokeWidth="38" strokeLinecap="round" transform="translate(3 6)" opacity=".5" />
      <path d={d} stroke={`url(#${id})`} strokeWidth="36" strokeLinecap="round" />
      <path d={d} stroke="#fff" strokeOpacity=".45" strokeWidth="6" strokeLinecap="round" transform="translate(-6 -8)" />
    </svg>
  );
}

export function Cylinder({ className = "", tone = "lime" }: ShapeProps) {
  const [a, b, c] = stops[tone];
  return (
    <div aria-hidden className={`relative rounded-[40%/22%] ${className}`} style={{ background: `linear-gradient(90deg, ${b}, ${a} 35%, ${b} 60%, ${c})` }}>
      <span className="absolute inset-x-0 top-0 h-[36%] rounded-[50%]" style={{ background: `radial-gradient(circle at 40% 40%, ${a}, ${b})` }} />
    </div>
  );
}

export function Ring({ className = "", tone = "white" }: ShapeProps) {
  const [a, b, c] = stops[tone];
  return (
    <div aria-hidden className={`rounded-full ${className}`}
      style={{ background: `radial-gradient(circle, transparent 38%, ${c} 39%, ${a} 55%, ${b} 70%, ${c} 72%, transparent 73%)` }} />
  );
}

export function Cone({ className = "", tone = "white" }: ShapeProps) {
  const id = `cone-${tone}`;
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs><Grad id={id} tone={tone} angle={0} /></defs>
      <path d="M62 8 Q66 8 68 14 L112 98 Q114 108 102 108 L18 108 Q6 108 10 98 L56 14 Q58 8 62 8Z" fill={`url(#${id})`} />
      <path d="M62 10 L70 108 L102 108 Q114 108 112 98Z" fill={stops[tone][2]} opacity=".35" />
    </svg>
  );
}
