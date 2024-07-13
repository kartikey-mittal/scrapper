

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/Home';
import Test from './pages/Test';
import ScrapHome from './scrappers/Pages/ScrapHome';
import UserHome from './users/Pages/UserHome';
import MainLogin from './login/MainLogin/MainLogin';

const routes = [
  { path: '/', element: <HomeScreen />,},
  { path: '/test', element: <Test />,},
  { path: '/scrap/home', element: <ScrapHome />,},
  { path: '/user/home', element: <UserHome />,},
  { path: '/login', element: <MainLogin />,},


];

const App= ()=> {
  return (
    <>
    <Router>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
        </>
);
}

export default App;
