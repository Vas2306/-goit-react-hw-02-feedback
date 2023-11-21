import React from 'react';
import css from './Feedback.module.css';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
    handleGoodReview = () => {
        this.setState(prevState => {
            return {
                good:prevState.good+1,
            }
        })
    }
  render() {
    return (
     
        <section className={css.feedback}>
        <div>
          <h1 className={css.title}>Please leave feedback</h1>
          <div>
            <button className={css.button} type="button" onClick={this.handleGoodReview}>
              Good
            </button>
            <button className={css.button} type="button">
              Neutral
            </button>
            <button className={css.button} type="button">
              Bad
            </button>
          </div>
          <div className={css.resultStatistics}>
            <h2 className={css.titleStatistics}>Statistics</h2>
            <ul className={css.list}>
              <li className={css.item}>
                            Good: <span>{ this.state.good}</span>
              </li>
              <li className={css.item}>
                Neutral: <span>3</span>
              </li>
              <li className={css.item}>
                Bad: <span>3</span>
              </li>
              <li className={css.item}>
                Total: <span>3</span>
              </li>
              <li className={css.item}>
                Positive feedback: <span>30%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>  
    
    
    );
  }
}

export default Feedback;
