/* ReactRouter */
import { Routes, Route, Link, NavLink } from 'react-router-dom';

/* Pages */
import Home from 'pages/Home';
import News from 'pages/News';
import Users from 'pages/Users';
import Conference from 'pages/Conference';
import Chat from 'pages/Chat';
import Notifications from 'pages/Notifications';
import Reports from 'pages/Reports';
import Statistics from 'pages/Statistics';
import Authorization from 'pages/Authorization';
import Settings from 'pages/Setings';
import Logout from 'pages/Logout';
import ErrorPage from 'pages/404';

/* Style */
import style from './app.module.css';

export const App = () => {
  return (
    <div className={style.main}>
      <Routes>
        <Route path='News' element={<News />} />
        <Route path='Users' element={<Users />} />
        <Route path='Conference' element={<Conference />} />
        <Route path='Chat' element={<Chat />} />
        <Route path='Notifications' element={<Notifications />} />
        <Route path='Reports' element={<Reports />} />
        <Route path='Statistics' element={<Statistics />} />
        <Route path='Settings' element={<Settings />} />
        <Route path='Authorization' element={<Authorization />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}


