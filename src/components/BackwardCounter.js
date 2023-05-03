import Card from './Card';
import useCounter from '../hooks/use-conunter';

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
