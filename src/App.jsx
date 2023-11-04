import Aside from './components/aside/Aside';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './routes/Home';
import Order from './routes/Order';
import About from './routes/About';
import NotFound from './routes/NotFound';

const App = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [title, setTitle] = useState('Главная');
  return (
    <>
      <Aside currentVisible={isAsideOpen} setCurrentVisible={setIsAsideOpen} />
      <main className="main">
        <div className="container mx-auto pt-12 px-2" style={{ width: '1230px' }}>
          <h1 className="text-3xl block mb-10 text-violet-800 font-medium border-b-2 border-dashed border-violet-800 pb-1 w-min px-1 whitespace-nowrap">
            {title}
          </h1>
          <Routes>
            <Route path="react-lab/" element={<Home changeTitle={setTitle} />}></Route>
            <Route
              path="react-lab/order/:orderId"
              element={<Order changeTitle={setTitle} />}></Route>
            <Route path="react-lab/about" element={<About changeTitle={setTitle} />}></Route>
            <Route path="react-lab/*" element={<NotFound changeTitle={setTitle} />}></Route>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
