import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 25px 0 100px;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.contrast};
`;
