import { useEffect } from 'react';
import poster from './../assets/img/example.jpg';

import './about.css';

const About = ({ changeTitle }) => {
  useEffect(() => changeTitle('О нас'));
  return (
    <section className="about">
      <img src={poster} alt="пример постера" />
      <ul className="about__list text-justify">
        <li className="about__item my-9 flex items-center">
          <span className="text-xl text-center border-2 rounded-xl border-violet-800 whitespace-nowrap w-1/2 font-medium text-violet-800">
            Широкий выбор
          </span>
          <span className="text-xl ml-10">
            Наш магазин предлагает огромный ассортимент постеров различной тематики, стилей и
            размеров. Покупатели могут найти постеры подходящие их вкусу и интересам, что
            обеспечивает удовлетворение разнообразных потребностей.
          </span>
        </li>
        <li className="about__item my-9 flex items-center">
          <span className="text-xl text-center border-2 rounded-xl border-violet-800 whitespace-nowrap w-1/2 font-medium text-violet-800 order-2">
            Качество продукции
          </span>
          <span className="text-xl mr-10">
            Наш магазин гарантирует высокое качество постеров. Используется качественная бумага,
            чернила и технологии печати, что обеспечивает яркие, четкие и долговечные изображения.
            Покупатели могут быть уверены в том, что приобретают продукцию высокого качества.
          </span>
        </li>
        <li className="about__item my-9 flex items-center">
          <span className="text-xl text-center border-2 rounded-xl border-violet-800 whitespace-nowrap w-1/2 font-medium text-violet-800">
            Уникальный дизайн
          </span>
          <span className="text-xl ml-10">
            Наш магазин предлагает постеры с уникальными дизайнами, которые нельзя найти в других
            магазинах. Это позволяет покупателям создавать уникальную атмосферу в своих домах или
            рабочих пространствах и выделиться среди других интерьеров.
          </span>
        </li>
        <li className="about__item my-9 flex items-center">
          <span className="text-xl text-center border-2 rounded-xl border-violet-800 whitespace-nowrap w-1/2 font-medium text-violet-800 order-2">
            Удобство покупки
          </span>
          <span className="text-xl mr-10">
            Наш магазин предлагает удобные возможности покупки постеров. Покупатели могут оформить
            заказ онлайн, без необходимости посещать физический магазин. Также доступны различные
            методы оплаты и доставки, что обеспечивает комплексный сервис покупателям.
          </span>
        </li>
        <li className="about__item my-9 flex items-center">
          <span className="text-xl text-center border-2 rounded-xl border-violet-800 whitespace-nowrap w-1/2 font-medium text-violet-800">
            Скидки и акции
          </span>
          <span className="text-xl ml-10">
            Наш магазин предлагает регулярные скидки, акции и специальные предложения для постоянных
            покупателей. Это позволяет покупателям получить постеры по более выгодной цене и
            экономить свои финансы.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default About;
