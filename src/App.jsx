import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { refresh } from './redux/auth/operations';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { selectIsRefreshing } from './redux/auth/selectors';
import { useSelector } from 'react-redux';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



function App() {
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(refresh())
  },[dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing)

  return (
    <>
        <Layout>
          {isRefreshing ? 
          <p>Refreshing user,please wait</p> : 
          (<Routes>
            <Route path='/' element={<PrivateRoute component={<HomePage/>} navigateTo="/login"/>} />
            <Route path='/register' element={<RestrictedRoute component={<RegisterPage/>} navigateTo="/contacts"/>} />
            <Route path='/login' element={<RestrictedRoute component={<LoginPage/>} navigateTo='/contacts'/>} />
            <Route path='/contacts' element={<PrivateRoute component={<ContactsPage/> } navigateTo="/register"/>}/>
          </Routes>)}
        </Layout>
    </>
  );
}

export default App;