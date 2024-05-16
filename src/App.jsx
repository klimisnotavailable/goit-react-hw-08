import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
import Layout from './components/Layout/Layout';
import ContactsList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { register } from './redux/auth/operations';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginForm from './components/LoginForm /LoginForm';


function App() {
  
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginForm/> } />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;