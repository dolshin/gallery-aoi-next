import NextLink from 'next/link';
import Image from 'next/image';
import type { LogoProps } from './LogoProps';

export const Logo = ({
  src,
  alt,
  width = 120,
  height = 44,
  href,
  className,
}: LogoProps) => {
  return (
    <h1 className={className}>
      <NextLink href={href}>
        <Image src={src} alt={alt} width={width} height={height} />
      </NextLink>
    </h1>
  );
};
