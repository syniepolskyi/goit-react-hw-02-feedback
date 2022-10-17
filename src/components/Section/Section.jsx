import { default as PropTypes } from 'prop-types';
import { SectionStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return <SectionStyled title={title}>{children}</SectionStyled>;
};

Section.propTypes = {
  title: PropTypes.string,
};
