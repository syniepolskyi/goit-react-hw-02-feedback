import { default as React } from 'react';

import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import { Container } from './App.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = evt => {
    const key = evt.currentTarget.dataset.type;
    this.setState({
      [key]: this.state[key] + 1,
    });
  };

  countTotalFeedback = () => {
    return [...Object.values(this.state)].reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    return (
      <Container>
        <Section title="Feedback options">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.changeState}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
