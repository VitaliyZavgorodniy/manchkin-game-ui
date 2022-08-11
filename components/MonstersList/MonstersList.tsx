import {
  Wrapper,
  Title,
  Info,
  List,
  Item,
  DataButton,
  ResetButton,
} from './MonstersList.styled';

import { AiOutlineClear } from 'react-icons/ai';

import { IMonster } from 'interfaces/IMonster';

interface IMonsterListProps {
  monstersList: IMonster[];
  handleRemoveMonster: (item: string) => void;
  handleReset: () => void;
}

const MonstersList = ({
  monstersList,
  handleRemoveMonster,
  handleReset,
}: IMonsterListProps) => {
  const renderList = () => {
    const elementHTML = monstersList.map(({ id, value }) => (
      <Item key={id}>
        <DataButton onClick={() => handleRemoveMonster(id)}>{value}</DataButton>
      </Item>
    ));

    return elementHTML;
  };

  return (
    <Wrapper>
      <Title>Ememies</Title>

      {monstersList.length ? (
        <List>
          {renderList()}
          <Item>
            <ResetButton onClick={handleReset}>
              <AiOutlineClear />
            </ResetButton>
          </Item>
        </List>
      ) : (
        <Info>no enemies selected</Info>
      )}
    </Wrapper>
  );
};

export default MonstersList;
