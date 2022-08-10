import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  background-color: ${(p) => p.theme.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 400px;
  margin: -20px 0 0 -20px;
`;

export const Item = styled.li`
  margin: 20px 0px 0px 20px;
  width: 60px;
  height: 60px;
`;

export const PickButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.alt};
  color: ${(p) => p.theme.colors.contrast};
  font-size: 24px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  color: ${(p) => p.theme.colors.accent};
  font-size: 32px;
`;
