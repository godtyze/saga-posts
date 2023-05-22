import { FC } from 'react';

import { PaginationControl } from 'react-bootstrap-pagination-control';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setPostsPage, selectLimit, selectPage } from 'store/slices/PostSlice';

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);

  const onChange = (page: number) => dispatch(setPostsPage(page));

  return (
    <PaginationControl
      page={page}
      between={4}
      total={100}
      limit={limit}
      changePage={onChange}
      ellipsis={1}
    />
  );
};

export default Pagination;
