import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
`;

export const Info = styled.h4`
  margin-top: 10px;
  font-size: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 0px 0 -10px;
`;

export const Item = styled.li`
  width: 93px;
  margin: 10px 0px 0px 10px;
`;

export const DataButton = styled.button`
  width: 100%;
  padding: 7px 0;
  background-color: ${(p) => p.theme.colors.alt};
  color: ${(p) => p.theme.colors.contrast};
  border-radius: 5px;
`;

export const ResetButton = styled(DataButton)`
  background-color: ${(p) => p.theme.colors.accent};
`;
