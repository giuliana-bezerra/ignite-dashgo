import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement; // Only components, not texts or numbers
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  function isLinkActive() {
    return (
      (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) ||
      (!shouldMatchExactHref && asPath.startsWith(String(rest.href)))
    );
  }

  if (isLinkActive()) isActive = true;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}
