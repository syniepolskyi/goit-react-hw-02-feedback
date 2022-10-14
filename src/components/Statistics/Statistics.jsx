import { default as PropTypes } from 'prop-types';
import { 
  SectionTitle, 
  StatisticsStyled,
} from './Statistics.styled';

export const Statistics = ({
  title
}) => {
  return (
    <StatisticsStyled>
      {(title ? <SectionTitle>{title}</SectionTitle> : '')}
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};