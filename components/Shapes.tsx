/** Decorative 3D-style shapes used in the hero. All aria-hidden. */

export function LimeSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <path
        d="M20 40 C80 10 150 40 100 70 C40 100 30 100 100 120 C170 140 120 180 50 170"
        stroke="#c8f30f"
        strokeWidth="34"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhiteSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <path
        d="M30 150 C70 100 140 150 160 100 C180 50 90 60 60 90 C30 120 120 90 150 40"
        stroke="#fff"
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Cylinder({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`rounded-[36px] bg-lime ${className}`} />;
}

export function Ring({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`rounded-full border-[38px] border-white shadow-[inset_0_-8px_16px_rgb(0_0_0/0.12)] ${className}`}
    />
  );
}

export function Cone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <polygon points="60,10 112,104 8,104" fill="#fff" stroke="#fff" strokeWidth="10" strokeLinejoin="round" />
    </svg>
  );
}
