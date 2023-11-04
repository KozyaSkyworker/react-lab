import { useEffect } from 'react';

const About = ({ changeTitle }) => {
  useEffect(() => changeTitle('О нас'));
  return <>2</>;
};

export default About;
