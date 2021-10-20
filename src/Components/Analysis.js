import Classes from '../Styles/Analysis.module.css';
import Question from './Question';
export default function Analysis({ Answers }) {
  return (
    <div className={Classes.analysis}>
      <h1>Question Analysis</h1>
      <Question answers={Answers} />
    </div>
  );
}
