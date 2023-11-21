import css from './SectionStatistics.module.css';
const SectionStatistics = ({ title, children }) => {
  return (
    <div className={css.resultStatistics}>
      <h2 className={css.titleStatistics}>{title}</h2>
      {children}
    </div>
  );
};

export default SectionStatistics;
