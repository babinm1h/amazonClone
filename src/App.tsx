import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Loader from './components/Loader/Loader';
import { useAppSelector } from './hooks/redux';
import { checkAuth } from './store/thunks/auth';
import { fetchCart } from './store/thunks/cart';

const App = () => {
  const dispatch = useDispatch()
  const { isLoading } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
    dispatch(fetchCart())
  }, [])


  if (isLoading) {
    return <div className="loader_centered"><Loader /></div>
  }

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;