import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 20px 30px;
  background-color: ${(p) => p.theme.colors.alt};
  color: ${(p) => p.theme.colors.contrast};
  font-size: 24px;
  border-radius: 10px;
`;
