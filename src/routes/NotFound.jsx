import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ changeTitle }) => {
  useEffect(() => changeTitle('Ошибка 404. Кажется, такой страницы нет'));
  return (
    <>
      <Link className="border-b-2 border-dashed" to={'react-lab/'}>
        Уйти на главную
      </Link>
    </>
  );
};

export default NotFound;
