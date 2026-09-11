import { useState, type ImgHTMLAttributes } from "react";

type SiteImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
};

export default function SiteImage({
  src,
  alt = "",
  className = "",
  fallbackLabel = "SBSBZ",
  onError,
  ...props
}: SiteImageProps) {
  const [failedSource, setFailedSource] = useState<string>();

  if (!src || failedSource === src) {
    return (
      <div
        className={`photo-fallback ${className}`}
        role="img"
        aria-label={`Photo unavailable${alt ? `: ${alt}` : ""}`}
        style={props.style}
      >
        <span aria-hidden="true">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={event => {
        setFailedSource(src);
        onError?.(event);
      }}
    />
  );
}
