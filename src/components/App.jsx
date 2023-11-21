// import Feedback from "./Feedback/Feedback";
// export const App = () => {
//   return <div>
//     <Feedback/>
//   </div>;
// };
// import React from 'react';
import { Component } from 'react';
import css from './Feedback/Feedback.module.css';
class App extends Component {
  constructor() {
    super();
    this.onFeedback = this.onFeedback.bind(this);
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  onFeedback(e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        console.log('Unknown id');
        break;
    }
  }

  
  render() {
    return (
      <section className={css.feedback}>
        <div>
          <h1 className={css.title}>Please leave feedback</h1>
          <div>
            <button
              className={css.button}
              type="button"
              id="good"
              onClick={this.onFeedback}
            >
              Good
            </button>
            <button
              className={css.button}
              type="button"
              id="neutral"
              onClick={this.onFeedback}
            >
              Neutral
            </button>
            <button
              className={css.button}
              type="button"
              id="bad"
              onClick={this.onFeedback}
            >
              Bad
            </button>
          </div>
          <div className={css.resultStatistics}>
            <h2 className={css.titleStatistics}>Statistics</h2>
            <ul className={css.list}>
              <li className={css.item}>
                Good: <span>{this.state.good}</span>
              </li>
              <li className={css.item}>
                Neutral: <span>{this.state.neutral}</span>
              </li>
              <li className={css.item}>
                Bad: <span>{this.state.bad}</span>
              </li>
              <li className={css.item}>
                Total: <span>{this.countTotalFeedback()}</span>
              </li>
              <li className={css.item}>
                Positive feedback: <span>{this.countPositiveFeedbackPercentage()}%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
