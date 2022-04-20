import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Loader from './components/Loader/Loader';
import { useAppSelector } from './hooks/redux';
import { checkAuth } from './store/thunks/auth';
import { fetchCart } from './store/thunks/cart';

const App = () => {
  const dispatch = useDispatch()
  const { isLoading } = useAppSelector(state => state.auth)

  const location = useLocation()

  useEffect(() => {
    dispatch(checkAuth())
    if (location.pathname !== `/cart`) dispatch(fetchCart())
  }, [dispatch])


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