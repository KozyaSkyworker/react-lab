import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import intialData from './../data';

const Order = ({ changeTitle }) => {
  useEffect(() => changeTitle('Заказ'));
  const { orderId } = useParams();
  const [count, setCount] = useState(1);
  const poster = intialData.find((itm) => itm.id == orderId);

  return (
    <section className="order text-xl">
      <p>
        Вы собираетесь заказать постер "
        <span className="text-violet-800 font-medium">{poster.name}</span>"
      </p>
      <form className="order__form flex flex-col" action="#">
        <label className="my-4 block ">
          <span className="whitespace-nowrap">Сколько постеров вам нужно?</span>
          <div className="box my-2 w-min">
            <input
              className="border-2 block rounded w-full"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              type="text"
            />
            <div className="flex">
              <button
                className="border-2 px-3 py-2 w-1/2 hover:bg-violet-800 hover:text-white"
                onClick={() => {
                  if (count > 1) {
                    setCount((count) => count - 1);
                  }
                }}
                type="button">
                -
              </button>
              <button
                className="border-2 px-3 py-2 w-1/2 hover:bg-violet-800 hover:text-white"
                onClick={() => setCount((count) => count + 1)}
                type="button">
                +
              </button>
            </div>
          </div>
        </label>
        <label className="my-4 block">
          Напишите своё ФИО
          <input
            className="border-2 block rounded w-full my-2 px-2 py-1"
            type="text"
            placeholder="Ваше ФИО"
          />
        </label>
        <label className="my-4 block">
          Напишите адрес доставки
          <input
            className="border-2 block rounded w-full my-2 px-2 py-1"
            type="text"
            placeholder="Ваш адрес"
          />
        </label>
        <label className="my-4 block">
          Выберите способ доставки:
          <label className="block mt-2">
            Почта
            <input className="ml-2" type="radio" name="dost" />
          </label>
          <label className="block">
            Курьер
            <input className="ml-2" type="radio" name="dost" checked />
          </label>
          <label className="block">
            Самовывоз
            <input className="ml-2" type="radio" name="dost" />
          </label>
          <label className="block">
            СДЭК
            <input className="ml-2" type="radio" name="dost" />
          </label>
        </label>
        <label className="my-4 block">
          Выберите способ оплаты:
          <label className="block">
            Наличными
            <input className="ml-2" type="radio" name="opl" />
          </label>
          <label className="block">
            Картой онлайн
            <input className="ml-2" type="radio" name="opl" checked />
          </label>
        </label>

        <p>
          Количество товаров: <span className="text-violet-800 font-medium">{count}</span> шт.
        </p>
        <p className="mt-2">
          Итого: <span className="text-violet-800 font-medium">{poster.price * count}</span> Р.
        </p>
        <button className="px-3 py-1 mt-4 mb-6 rounded text-white bg-violet-800 hover:bg-violet-600">
          Оплатить
        </button>
      </form>
    </section>
  );
};

export default Order;
