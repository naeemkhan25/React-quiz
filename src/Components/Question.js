import Cleasses from '../Styles/Question.module.css';
import Answer from './Answer';
export default function Question() {
  return (
    <div className={Cleasses.question}>
      <div className={Cleasses.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answer />
    </div>
  );
}
