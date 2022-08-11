import { IMonster } from 'interfaces/IMonster';

export const calculateMonsterPower = (monsterList: IMonster[]) =>
  monsterList.reduce((acc, { value }) => acc + value, 0);