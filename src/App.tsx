import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Loader from './components/Loader/Loader';
import { useAppSelector } from './hooks/redux';
import { checkAuth } from './store/thunks/auth';

const App = () => {
  const dispatch = useDispatch()
  const { isLoading } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
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