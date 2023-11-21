import { Component } from 'react';
import css from './Feedback/Feedback.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
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
      <Section title='Please leave feedback'>
        <FeedbackOptions options={[
          { id: 'good', name: 'Good' },
          { id: 'neutral', name: "Neutral" },
          {id:"bad",name:"Bad"}
        ]} onFeedback={this.onFeedback} />
        
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
                Positive feedback:{' '}
                <span>{this.countPositiveFeedbackPercentage()}%</span>
              </li>
            </ul>
          </div>
</Section>
      
    );
  }
}

export default App;

