import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
import { Button, FeedbackToolbar, Capitalized } from './FeedbackOptions.styled';

export class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
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
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,    
    neutral: PropTypes.number,    
    bad: PropTypes.number,    
  }),
  onLeaveFeedback: PropTypes.func,
};
