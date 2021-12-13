import React, { useState, useEffect } from 'react';

type Filter = '공지사항' | '뉴스';

const useNoticePagination = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>('공지사항');

  useEffect(() => {
    setPage(() => 1);
  }, [filter]);

  const onChangeFilter = (e: React.MouseEvent) => {
    const f = (e.target as HTMLDivElement).innerText.trim() as Filter;
    if(f === filter) return;
    setFilter(f);
  }

  const onClickPage = (pageToGo: number) => {
    if(page === pageToGo) return;
    setPage(() => pageToGo);
  }

  return {
    page, filter, onChangeFilter, onClickPage
  }
}



export default useNoticePagination;