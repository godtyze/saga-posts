import { FC } from 'react';

import { PaginationControl } from 'react-bootstrap-pagination-control';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setPostPage } from 'store/actions/PostActions';
import { selectLimit, selectPage } from 'store/reducers/PostReducer';

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);

  const onChange = (page: number) => dispatch(setPostPage(page));

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
