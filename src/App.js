

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/Home';
import Test from './pages/Test';
import ScrapHome from './scrappers/Pages/ScrapHome';
import UserHome from './users/Pages/UserHome';
import MainLogin from './login/MainLogin/MainLogin';
import UserLogin1 from './login/UserLogin/UserLogin1';
import ScrapLogin1 from './login/ScrapLogin/ScrapLogin1';

const routes = [
  { path: '/', element: <MainLogin />,},
  { path: '/test', element: <Test />,},
  { path: '/scrap/home', element: <ScrapHome />,},
  { path: '/user/home', element: <UserHome />,},
  { path: '/login', element: <MainLogin />,},
  { path: '/login/user', element: <UserLogin1 />,},
  { path: '/login/scrap', element: <ScrapLogin1 />,},


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
