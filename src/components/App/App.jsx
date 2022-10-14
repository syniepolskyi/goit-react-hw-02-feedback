import { default as React } from 'react';

//import { Statistics } from '../Statistics';
import { Container } from './App.styled';

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  changeState = (evt) => {
    const key = evt.target.dataset.type
    const stateObj = {}
    stateObj[key] = this.state[key]+1
    this.setState(stateObj)
  }

  render(){ 
    return (
    <Container>
      {/*<Statistics title="Upload stats" />*/}
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" data-type="good" onClick={this.changeState}>Good</button>
          <button type="button" data-type="neutral" onClick={this.changeState}>Neutral</button>
          <button type="button"  data-type="bad" onClick={this.changeState}>Bad</button>
        </div>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: { this.state.good }</p>
        <p>Neutral: { this.state.neutral }</p>
        <p>Bad: { this.state.bad }</p>
      </div>

    </Container>
    );
  }
};