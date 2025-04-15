import { AppDispatch, AppStore, RootState } from '@/redux/store';
import { useDispatch, useSelector, useStore } from 'react-redux';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
const useAppStore = useStore.withTypes<AppStore>();

export const useRedux = () => {
	return {
		dispatch: useAppDispatch(),
		appSelector: useAppSelector,
		store: useAppStore(),
	};
};
