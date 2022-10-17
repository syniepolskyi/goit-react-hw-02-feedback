import { default as PropTypes } from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      {message}
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string
};
