import { LayoutWrapper } from './Layout.styled';

import React, { Suspense } from 'react';
import { useAsyncFn } from 'react-use';
import { APP_ZONE } from 'shared/configs/App';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useRedux';
import { testIncrementAsync } from 'shared/redux/Test/Thunks';

const Layout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.tests.count);
  console.log('APP_ZONE: ', APP_ZONE);
  console.log('count: ', count);

  const [, incrementAsync] = useAsyncFn(async () => {
    await dispatch(testIncrementAsync());
  });

  return (
    <LayoutWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={incrementAsync}>Increment</button>
        <div>count: {count}</div>
        <div className="content-main">{children}</div>
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
