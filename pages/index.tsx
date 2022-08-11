import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { nanoid } from 'nanoid';

import MainLayout from 'layouts/MainLayout';
import InfoBoard from 'components/InfoBoard';
import MonstersList from 'components/MonstersList';
import HandleBar from 'components/HandleBar';
import ModalLevelPicker from 'components/ModalLevelPicker';
import CommonButton from 'components/CommonButton';
import Section from 'components/Section';

import { calculateMonsterPower } from 'helpers/reduceLevels';

import { IMonster } from 'interfaces/IMonster';

const Home: NextPage = () => {
  const [level, setLevel] = useState(1);
  const [itemLevel, setItemLevel] = useState(0);
  const [powerUp, setPowerUp] = useState(0);
  const [power, setPower] = useState(0);
  const [monstersList, setMonstersList] = useState<IMonster[]>([]);
  const [monstersLevel, setMonstersLevel] = useState(0);
  const [result, setResult] = useState(0);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    setPower(level + itemLevel + powerUp);
  }, [level, itemLevel, powerUp]);

  useEffect(() => {
    setResult(power - monstersLevel);
  }, [power, monstersLevel]);

  useEffect(() => {
    setMonstersLevel(calculateMonsterPower(monstersList));
  }, [monstersList]);

  const handleAddMonster = (monsterLevel: number) =>
    setMonstersList((state) => [
      ...state,
      { id: nanoid(), value: monsterLevel },
    ]);

  const handleRemoveMonster = (id: string) =>
    setMonstersList((state) => state.filter((list) => id !== list.id));

  const handleResetMonsters = () => setMonstersList([]);

  return (
    <MainLayout title="Munchkin UI">
      <Section>
        <InfoBoard
          powerLevel={power}
          monsterLevel={monstersLevel}
          result={result}
        />
      </Section>

      <Section>
        <MonstersList
          monstersList={monstersList}
          handleRemoveMonster={handleRemoveMonster}
          handleReset={handleResetMonsters}
        />
      </Section>

      <Section>
        <HandleBar
          title="Hero level"
          value={level}
          reset={() => setLevel(1)}
          increment={() => setLevel((state) => state + 1)}
          decrement={() => setLevel((state) => state - 1)}
        />
        <HandleBar
          title="Item level"
          value={itemLevel}
          reset={() => setItemLevel(0)}
          increment={() => setItemLevel((state) => state + 1)}
          decrement={() => setItemLevel((state) => state - 1)}
        />
        <HandleBar
          title="Power Up"
          value={powerUp}
          reset={() => setPowerUp(0)}
          increment={() => setPowerUp((state) => state + 1)}
          decrement={() => setPowerUp((state) => state - 1)}
        />
      </Section>

      <Section>
        <CommonButton title="Pick monster" onClick={() => setOpenModal(true)} />
      </Section>

      <ModalLevelPicker
        isOpen={isOpenModal}
        close={() => setOpenModal(false)}
        handleLevel={handleAddMonster}
      />
    </MainLayout>
  );
};

export default Home;
