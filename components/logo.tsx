import Image from "next/image";

export function BytenLogo({
  className,
  priority = false,
  width = 144,
}: {
  className?: string;
  priority?: boolean;
  width?: number;
}) {
  const height = Math.round((width * 364) / 722);

  return (
    <span className={`inline-flex items-center${className ? ` ${className}` : ""}`}>
      <Image
        src="/byten-logo.png"
        alt="Byten"
        width={width}
        height={height}
        priority={priority}
        className="h-auto dark:hidden"
      />
      <Image
        src="/byten-logo-dark.png"
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        priority={priority}
        className="hidden h-auto dark:block"
      />
    </span>
  );
}
