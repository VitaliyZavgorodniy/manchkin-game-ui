import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 100%;
  padding: 15px 25px;
  background-color: ${(p) => p.theme.colors.alt};
  color: ${(p) => p.theme.colors.contrast};
  font-size: 24px;
  border-radius: 10px;
`;
