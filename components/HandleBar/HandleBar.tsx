import { Wrapper } from './HandleBar.styled';

import { AiOutlinePlus, AiOutlineMinus, AiOutlineClear } from 'react-icons/ai';

interface IHandleBarProps {
  title: string;
  value: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const HandleBar = ({
  value,
  increment,
  decrement,
  reset,
  title,
}: IHandleBarProps) => (
  <Wrapper>
    <button onClick={decrement}>
      <AiOutlineMinus />
    </button>
    <span>
      {title}: {value}
    </span>
    <button onClick={increment}>
      <AiOutlinePlus />
    </button>
    <button onClick={() => reset()}>
      <AiOutlineClear />
    </button>
  </Wrapper>
);

export default HandleBar;
