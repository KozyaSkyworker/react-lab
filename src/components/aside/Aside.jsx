import { useState } from 'react';
import img from './../../assets/img/1.jpg';
import { GiHamburgerMenu, GiTargetPoster } from 'react-icons/gi';
import { AiOutlineClose, AiFillHome, AiFillQuestionCircle } from 'react-icons/ai';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <aside
      className={
        'pl-1 pr-3 aside border-r-2 border-black/13 w-64 h-screen fixed l-0 transition-transform' +
        (isOpen ? ' ' : ' -translate-x-full')
      }>
      <div className="aside__inner relative cursor-pointer pt-8">
        <span
          className="text-2xl hover:text-violet-800 absolute hover:bg-gray-200 rounded-full p-1 top-1 -right-14"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </span>
        <a
          className="inline-block w-full my-3 aside__logo text-center text-3xl font-bold hover:text-violet-800"
          href="/">
          Posters
        </a>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="my-3 navigation__item text-center">
              <a href="#" className="navigation__link inline-block text-xl hover:text-violet-800">
                <p className="flex items-center ">
                  {' '}
                  Главная
                  <span className="ml-3 inline-block">
                    <AiFillHome />
                  </span>
                </p>
              </a>
            </li>
            <li className=" my-3 navigation__item text-center">
              <a href="#" className="navigation__link inline-block text-xl hover:text-violet-800">
                <p className="flex items-center">
                  {' '}
                  Каталог
                  <span className="ml-3 inline-block">
                    <GiTargetPoster />
                  </span>
                </p>
              </a>
            </li>
            <img className="rounded-xl my-6 block cursor-auto" src={img} alt="poster" />
            <li className="my-3 navigation__item text-center">
              <a href="#" className="navigation__link inline-block text-xl hover:text-violet-800">
                <p className="flex items-center">
                  {' '}
                  Почему мы
                  <span className="ml-3 inline-block">
                    <AiFillQuestionCircle />
                  </span>
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
