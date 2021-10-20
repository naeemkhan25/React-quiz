import Cleasses from '../Styles/Question.module.css';
import Answer from './Answer';
export default function Question({ answers }) {
  return answers.map((answer, index) => (
    <div className={Cleasses.question} key={index}>
      <div className={Cleasses.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        {answer.title}
      </div>
      <Answer options={answer.options} input={false} />
    </div>
  ));
}
