import Card from './Card';
import useCounter from '../hooks/use-conunter';

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
