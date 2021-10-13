import { ReactNode } from 'react';

import { useAuthorization } from '../hooks/useAuthorization';

interface AuthorizationProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Authorized({
  children,
  permissions,
  roles,
}: AuthorizationProps) {
  const userCanSeeComponent = useAuthorization({ permissions, roles });

  if (!userCanSeeComponent) return null;

  return <>{children}</>;
}
