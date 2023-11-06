import img from './../../assets/img/1.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiFillHome, AiFillQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Aside = ({ currentVisible, setCurrentVisible }) => {
  console.log('ASIDE is rerender');

  return (
    <aside
      className={
        'bg-zinc-300 pl-1 pr-3 aside border-r-2 border-black/13 w-64 h-screen fixed l-0 transition-transform z-10' +
        (currentVisible ? ' ' : ' -translate-x-full')
      }>
      <div className="aside__inner relative cursor-pointer pt-8">
        <span
          className="text-2xl hover:text-violet-800 absolute hover:bg-gray-200 rounded-full p-1 top-1 -right-14"
          onClick={() => setCurrentVisible(!currentVisible)}>
          {currentVisible ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </span>
        <Link
          className="inline-block w-full my-3 aside__logo text-center text-3xl font-bold hover:text-violet-800"
          to="react-lab/"
          onClick={() => setCurrentVisible(false)}>
          Posters
        </Link>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="my-3 navigation__item text-center">
              <Link
                to="react-lab/"
                onClick={() => setCurrentVisible(false)}
                className="navigation__link inline-block text-xl hover:text-violet-800">
                <p className="flex items-center ">
                  {' '}
                  Главная
                  <span className="ml-3 inline-block">
                    <AiFillHome />
                  </span>
                </p>
              </Link>
            </li>

            <img className="rounded-xl my-6 block cursor-auto" src={img} alt="poster" />
            <li className="my-3 navigation__item text-center">
              <Link
                to="react-lab/about"
                onClick={() => setCurrentVisible(false)}
                className="navigation__link inline-block text-xl hover:text-violet-800">
                <p className="flex items-center">
                  {' '}
                  Почему мы
                  <span className="ml-3 inline-block">
                    <AiFillQuestionCircle />
                  </span>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
