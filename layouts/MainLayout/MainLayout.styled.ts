import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 10px 0;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.contrast};
`;