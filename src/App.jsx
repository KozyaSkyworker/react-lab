import Aside from './components/aside/Aside';
import Home from './routes/Home';
import Order from './routes/Order';
import About from './routes/About';
import NotFound from './routes/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <Aside currentVisible={isAsideOpen} setCurrentVisible={setIsAsideOpen} />
      <main className="main">
        <div className="container mx-auto" style={{ width: '1230px', padding: '0 15px' }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
