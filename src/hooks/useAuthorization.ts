import { useContext } from 'react';

import { AuthContext } from './../context/AuthContext';
import { validateUserPermissions } from '../common/validateUserPermissions';

type UseAuthorization = {
  permissions?: string[];
  roles?: string[];
};

export function useAuthorization({ permissions, roles }: UseAuthorization) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return false;

  const isUserAuthorized = validateUserPermissions({
    user,
    permissions,
    roles,
  });

  return isUserAuthorized;
}
