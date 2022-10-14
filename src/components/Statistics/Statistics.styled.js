import { default as styled } from 'styled-components';

export const StatisticsStyled = styled.section`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 4px 4px 12px 12px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
`;