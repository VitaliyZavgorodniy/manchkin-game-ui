import { Wrapper } from './Section.styled';

interface IContainerProps {
  children: React.ReactNode;
}

const Section = ({ children }: IContainerProps) => (
  <Wrapper>{children}</Wrapper>
);

export default Section;
