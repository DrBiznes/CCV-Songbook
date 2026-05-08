interface OrnamentProps {
  variant?: "asterism" | "fleuron" | "trefoil";
}

export function Ornament({ variant = "asterism" }: OrnamentProps) {
  return (
    <div className="ornament" role="presentation" aria-hidden>
      {variant === "asterism" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L13.2 5.5 L17 6 L14 8.6 L14.8 12.4 L12 10.5 L9.2 12.4 L10 8.6 L7 6 L10.8 5.5 Z" />
        </svg>
      )}
      {variant === "fleuron" && (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M16 4 C20 9 24 11 28 12 C24 13 20 15 16 20 C12 15 8 13 4 12 C8 11 12 9 16 4 Z" />
          <circle cx="16" cy="12" r="1.2" fill="currentColor" />
        </svg>
      )}
      {variant === "trefoil" && (
        <svg viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="9" cy="12" r="4" />
          <circle cx="16" cy="12" r="4" />
          <circle cx="23" cy="12" r="4" />
        </svg>
      )}
    </div>
  );
}
