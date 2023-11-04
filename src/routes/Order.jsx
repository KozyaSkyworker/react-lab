import { useEffect } from 'react';

const Order = ({ changeTitle }) => {
  useEffect(() => changeTitle('Заказ'));
  return <>4</>;
};

export default Order;
