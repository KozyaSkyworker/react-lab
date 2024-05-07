import { useEffect, useState } from 'react';
import intialData from './../data';
import { Link } from 'react-router-dom';

import './../assets/mediaStyles/home.css';

const Home = ({ changeTitle }) => {
  useEffect(() => changeTitle('Главная'));

  const [data, setData] = useState(intialData);

  const [searchValue, setSearchValue] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1700);

  const handleTabClick = (cat) => {
    setData(intialData.filter((itm) => itm.category === cat));
  };

  return (
    <section className="home">
      <div className="my-5 home__controls rounded flex justify-between p-2">
        <input
          className="grow bg-gray-100/50 px-3 py-2 rounded focus:border-violet-800"
          placeholder="Ищите что-то конкретное?"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
        />
        <div className="home__tabs">
          <ul className="flex item-center ml-10">
            <li
              className="tab py-2 cursor-pointer hover:bg-violet-800 hover:text-white transition-colors rounded mx-2 px-3 bg-gray-100 bg-violet-800
              text-white"
              onClick={(e) => {
                document.querySelectorAll('.tab').forEach((i) => {
                  i.classList.remove('bg-violet-800');
                  i.classList.remove('text-white');
                });
                e.target.classList.add('bg-violet-800');
                e.target.classList.add('text-white');
                setData(intialData);
              }}>
              Все
            </li>
            <li
              className="tab py-2 cursor-pointer hover:bg-violet-800 hover:text-white transition-colors rounded mx-2 px-3 bg-gray-100"
              onClick={(e) => {
                document.querySelectorAll('.tab').forEach((i) => {
                  i.classList.remove('bg-violet-800');
                  i.classList.remove('text-white');
                });
                e.target.classList.add('bg-violet-800');
                e.target.classList.add('text-white');
                handleTabClick(3);
              }}>
              Человек-паук
            </li>
            <li
              className="tab py-2 cursor-pointer hover:bg-violet-800 hover:text-white transition-colors rounded mx-2 px-3 bg-gray-100"
              onClick={(e) => {
                document.querySelectorAll('.tab').forEach((i) => {
                  i.classList.remove('bg-violet-800');
                  i.classList.remove('text-white');
                });
                e.target.classList.add('bg-violet-800');
                e.target.classList.add('text-white');
                handleTabClick(2);
              }}>
              Игры
            </li>
          </ul>
        </div>
      </div>
      <div className="home__goods flex flex-wrap " style={{ margin: '0 -20px' }}>
        {isLoading ? (
          <p>Данные загружаются...</p>
        ) : (
          data
            .filter((itm) => itm.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((itm) => {
              return (
                <div
                  className="home__poster poster border-2 p-2 rounded text-center"
                  style={{ width: 'calc(100% / 3 - 20px)', margin: '15px 10px' }}
                  key={itm.id}>
                  <img
                    className="poster__img block w-full object-contain object-top mb-2"
                    style={{ height: '400px' }}
                    src={itm.url}
                    alt={`фото постера ${itm.name}`}
                  />
                  <h3 className="text-xl font-medium my-2 ">{itm.name}</h3>
                  <p>
                    <span className="font-medium">Цена за шт. {itm.price} Р. </span>
                    <span className="text-violet-800 font-medium">Размеры: {itm.size}</span>
                  </p>
                  <Link
                    className="my-2 block px-2 py-1 bg-violet-800 text-white rounded-xl hover:bg-violet-600"
                    to={`/react-lab/order/${itm.id}`}>
                    Заказать
                  </Link>
                </div>
              );
            })
        )}
      </div>
    </section>
  );
};

export default Home;
