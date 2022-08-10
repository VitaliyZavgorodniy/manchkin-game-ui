import {
  Wrapper,
  CloseButton,
  List,
  Item,
  PickButton,
} from './ModalLevelPicker.styled';

import { MdClear } from 'react-icons/md';

interface IModalLevelPickerProps {
  isOpen: boolean;
  close: () => void;
  handleLevel: (value: number) => void;
}

const ModalLevelPicker = ({
  isOpen,
  close,
  handleLevel,
}: IModalLevelPickerProps) => {
  const handleValue = (level: number) => {
    handleLevel(level);
    close();
  };

  const renderList = () => {
    const numbers = [...Array(35).keys()];

    const elementHTML = numbers.map((item) => (
      <Item key={item}>
        <PickButton onClick={() => handleValue(item)}>{item}</PickButton>
      </Item>
    ));

    return elementHTML;
  };

  return (
    <Wrapper isOpen={isOpen}>
      <CloseButton onClick={close}>
        <MdClear />
      </CloseButton>

      <List>{renderList()}</List>
    </Wrapper>
  );
};

export default ModalLevelPicker;
