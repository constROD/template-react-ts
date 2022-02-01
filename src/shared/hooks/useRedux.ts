import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStoreRootState } from 'shared/interfaces/Redux';

export const useAppSelector: TypedUseSelectorHook<IStoreRootState> = useSelector;
