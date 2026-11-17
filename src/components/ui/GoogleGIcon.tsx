interface GoogleGIconProps {
  size?: number;
  className?: string;
}

/** Multi-colour Google "G" mark. */
export function GoogleGIcon({ size = 18, className }: GoogleGIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.49 3.77v3.12h3.99c2.34-2.16 3.68-5.32 3.68-8.74z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.99-3.12c-1.12.75-2.54 1.19-3.97 1.19-3.05 0-5.64-2.06-6.57-4.83H1.36v3.22A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.43 14.33a7.22 7.22 0 0 1 0-4.66V6.45H1.36a12 12 0 0 0 0 11.1l4.07-3.22z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A12 12 0 0 0 1.36 6.45l4.07 3.22c.93-2.77 3.52-4.92 6.57-4.92z"
      />
    </svg>
  );
}
