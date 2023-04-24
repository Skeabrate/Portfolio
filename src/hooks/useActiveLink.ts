import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from 'utils/routes';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState<string>(ROUTES.home.label);
  const router = useRouter();

  useEffect(() => {
    setActiveLink(Object.values(ROUTES).find(({ href }) => href === router.pathname)?.label || 'Not found');
  }, [router.pathname]);

  return { activeLink };
};
