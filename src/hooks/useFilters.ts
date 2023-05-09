import { useState } from 'react';

export const FILTERS = ['All', 'Commercial', 'Personal'] as const;
export type TFilter = (typeof FILTERS)[number];

export const useFilters = () => {
  const [filter, setFilter] = useState<TFilter>(FILTERS[0]);
  const handleNewFilter = (filter: TFilter) => setFilter(filter);

  return { filter, handleNewFilter };
};
