import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
`;

export const Info = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin-top: 15px;
  font-size: 50px;
  background-color: ${(p) => p.theme.colors.alt};
  border-radius: 10px;
`;
