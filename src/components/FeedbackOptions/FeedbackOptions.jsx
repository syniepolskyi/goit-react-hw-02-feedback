import { default as PropTypes } from 'prop-types';
import { FeedbackToolbar, Capitalized } from './FeedbackOptions.styled';
import { Button } from '../App/App.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackToolbar>
        {Object.keys(options).map(key => {
          return (
            <Button
              type="button"
              key={key}
              data-type={key}
              onClick={onLeaveFeedback}
            >
              <Capitalized>{key}</Capitalized>
            </Button>
          );
        })}
      </FeedbackToolbar>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
