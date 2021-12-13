import { useState, useEffect } from 'react';

type Filter = 'notice' | 'news';

const useNoticePagination = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>('notice');

  useEffect(() => {
    setPage(() => 1);
  }, [filter]);

  const onChangeFilter = (filter: Filter) => {
    setFilter(filter);
  }
}



export default useNoticePagination;