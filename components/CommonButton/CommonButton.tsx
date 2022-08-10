import { Wrapper } from './CommonButton.styled';

interface ICommonButton {
  title: string;
  onClick: () => void;
}

const CommonButton = ({ title, onClick }: ICommonButton) => (
  <Wrapper onClick={onClick}>{title}</Wrapper>
);

export default CommonButton;
