import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';

export class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <>{message}</>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
