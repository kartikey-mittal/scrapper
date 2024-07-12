

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/Home';
import Test from './pages/Test';
import ScrapHome from './scrappers/Pages/ScrapHome';

const routes = [
  { path: '/', element: <HomeScreen />,},
  { path: '/test', element: <Test />,},
  { path: '/scrap/home', element: <ScrapHome />,},

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
