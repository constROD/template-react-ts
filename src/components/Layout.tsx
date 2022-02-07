import { LayoutWrapper } from './Layout.styled';

import React, { Suspense } from 'react';
import { useAsyncFn } from 'react-use';
import { APP_ZONE } from 'shared/configs/App';
import { useAppSelector } from 'shared/hooks/useRedux';
import TestActions from 'shared/redux/Test/Actions';

const Layout: React.FC = ({ children }) => {
  const { increment } = TestActions();
  const count = useAppSelector(state => state.tests.count);

  const [, incrementAsync] = useAsyncFn(async () => {
    await increment();
  });

  // eslint-disable-next-line no-console
  console.log('APP_ZONE: ', APP_ZONE);
  // eslint-disable-next-line no-console
  console.log('count: ', count);

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
