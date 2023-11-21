import css from "../Feedback/Feedback.module.css"
const Section = ({ title, children }) => {
    return ( <section className={css.feedback}>
         
        <div>
            <h1 className={css.title}>{title}</h1>
            {children}
        </div>
        </section>);
}
 
export default Section;