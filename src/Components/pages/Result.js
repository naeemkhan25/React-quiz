import _ from 'lodash';
import { useHistory, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Analysis';
import Summary from '../Summary';

export default function Result() {
  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);

  function AnswerCalculator() {
    let score = 0;
    answers.forEach((question, index) => {
      let correctIndex = [],
        checkedIndex = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  }

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summary scores={AnswerCalculator()} noq={answers.length} />
          <Analysis Answers={answers} />
        </>
      )}
    </>
  );
}
