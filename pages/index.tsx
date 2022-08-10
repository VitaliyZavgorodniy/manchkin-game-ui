import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import MainLayout from 'layouts/MainLayout';
import InfoBoard from 'components/InfoBoard';
import HandleBar from 'components/HandleBar';
import ModalLevelPicker from 'components/ModalLevelPicker';
import CommonButton from 'components/CommonButton';

const Home: NextPage = () => {
  const [level, setLevel] = useState(1);
  const [itemLevel, setItemLevel] = useState(0);
  const [powerUp, setPowerUp] = useState(0);
  const [power, setPower] = useState(0);
  const [monsterLevel, setMonsterLevel] = useState(0);
  const [result, setResult] = useState(0);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    setPower(level + itemLevel + powerUp);
  }, [level, itemLevel, powerUp]);

  useEffect(() => {
    setResult(power - monsterLevel);
  }, [power, monsterLevel]);

  const handleMonster = (monsterLevel: number) => setMonsterLevel(monsterLevel);

  return (
    <MainLayout title="Munchkin UI">
      <ModalLevelPicker
        isOpen={isOpenModal}
        close={() => setOpenModal(false)}
        handleLevel={handleMonster}
      />

      <InfoBoard
        powerLevel={power}
        monsterLevel={monsterLevel}
        result={result}
      />

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

      <ButtonContainer>
        <CommonButton title="Monster" onClick={() => setOpenModal(true)} />
      </ButtonContainer>
    </MainLayout>
  );
};

const ButtonContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;

export default Home;
