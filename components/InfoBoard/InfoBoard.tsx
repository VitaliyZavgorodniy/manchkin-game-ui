import { List, Item, Title, Info } from './InfoBoard.styled';

interface IInfoBarProps {
  powerLevel: number;
  monsterLevel: number;
  result: number;
}

const InfoBoard = ({ powerLevel, monsterLevel, result }: IInfoBarProps) => (
  <List>
    <Item>
      <Title>Power</Title>
      <Info>{powerLevel}</Info>
    </Item>

    <Item>
      <Title>Monsters</Title>
      <Info>{monsterLevel}</Info>
    </Item>

    <Item>
      <Title>Result</Title>
      <Info>{result}</Info>
    </Item>
  </List>
);

export default InfoBoard;
