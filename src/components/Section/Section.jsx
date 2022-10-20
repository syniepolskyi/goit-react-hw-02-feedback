import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
import { SectionStyled } from './Section.styled';

export class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return <SectionStyled title={title}>{children}</SectionStyled>;
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
