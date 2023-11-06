import Aside from './components/aside/Aside';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

const Home = lazy(() => import('./routes/Home'));
const Order = lazy(() => import('./routes/Order'));
const About = lazy(() => import('./routes/About'));
const NotFound = lazy(() => import('./routes/NotFound'));

const App = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [title, setTitle] = useState('Главная');
  return (
    <>
      <Aside currentVisible={isAsideOpen} setCurrentVisible={setIsAsideOpen} />
      <main className="main">
        <div className="container mx-auto pt-12 px-2" style={{ maxWidth: '1230px' }}>
          <h1 className="text-3xl block mb-10 text-violet-800 font-medium border-b-2 border-dashed border-violet-800 pb-1 w-min px-1 whitespace-nowrap">
            {title}
          </h1>
          <Routes>
            <Route
              path="react-lab/"
              element={
                <Suspense fallback={<p>Загрузка...</p>}>
                  <Home changeTitle={setTitle} />
                </Suspense>
              }></Route>
            <Route
              path="react-lab/order/:orderId"
              element={
                <Suspense fallback={<p>Загрузка...</p>}>
                  <Order changeTitle={setTitle} />
                </Suspense>
              }></Route>
            <Route
              path="react-lab/about"
              element={
                <Suspense fallback={<p>Загрузка...</p>}>
                  <About changeTitle={setTitle} />
                </Suspense>
              }></Route>
            <Route
              path="react-lab/*"
              element={
                <Suspense fallback={<p>Загрузка...</p>}>
                  <NotFound changeTitle={setTitle} />
                </Suspense>
              }></Route>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
