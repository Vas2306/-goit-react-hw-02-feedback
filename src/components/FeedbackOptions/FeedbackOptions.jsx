import css from '../Feedback/Feedback.module.css';
const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            id={option.id}
            onClick={onFeedback}
          >
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
