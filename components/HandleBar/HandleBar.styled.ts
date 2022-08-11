import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300px;
`;

export const Board = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ValueBoard = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 5px 0px;
  border: 1px solid ${(p) => p.theme.colors.holder};
  border-right: none;
  border-left: none;
  font-size: 45px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  border-radius: 5px;
  color: ${(p) => p.theme.colors.contrast};
  font-size: 32px;

  &:last-child {
    margin-left: 25px;
    background-color: ${(p) => p.theme.colors.accent};
    border: 1px solid ${(p) => p.theme.colors.accent};
  }
`;

export const FirstButton = styled(Button)`
  border-radius: 5px 0px 0px 5px;
  background-color: ${(p) => p.theme.colors.accent};
  border: 1px solid ${(p) => p.theme.colors.accent};
`;

export const LastButton = styled(Button)`
  border-radius: 0px 5px 5px 0px;
  background-color: ${(p) => p.theme.colors.alt};
  border: 1px solid ${(p) => p.theme.colors.alt};
`;
