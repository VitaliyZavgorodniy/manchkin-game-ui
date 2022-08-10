import {
  Wrapper,
  Title,
  Board,
  ValueBoard,
  Button,
  FirstButton,
  LastButton,
} from './HandleBar.styled';

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
    <Title>{title}</Title>

    <Board>
      <FirstButton onClick={decrement}>
        <AiOutlineMinus />
      </FirstButton>
      <ValueBoard>{value}</ValueBoard>

      <LastButton onClick={increment}>
        <AiOutlinePlus />
      </LastButton>

      <Button onClick={() => reset()}>
        <AiOutlineClear />
      </Button>
    </Board>
  </Wrapper>
);

export default HandleBar;
