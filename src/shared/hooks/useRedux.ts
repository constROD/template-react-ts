import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IAppDispatch, IStoreRootState } from 'shared/interfaces/Redux';

// eslint-disable-next-line
export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IStoreRootState> = useSelector;
