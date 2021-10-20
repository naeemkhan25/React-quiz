import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import UseQuestion from '../../hooks/useQuestion';
import Answer from '../Answer';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case 'answer':
      const question = _.cloneDeep(state);
      question[action.questionID].options[action.optionIndex].checked =
        action.value;
      return question;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { question, loading, error } = UseQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const history = useHistory();
  const { location } = history;
  const { state } = location;
  const { VideoTitle } = state;
  useEffect(() => {
    dispatch({
      type: 'questions',
      value: question,
    });
  }, [question]);
  function handleChange(e, index) {
    dispatch({
      type: 'answer',
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  function nextQuestion() {
    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  async function submitAnswer() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= question.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }
  const percentage =
    question.length > 0 ? ((currentQuestion + 1) / question.length) * 100 : 0;
  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna != null && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            options={qna[currentQuestion].options}
            handleChange={handleChange}
            input={true}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submitAnswer={submitAnswer}
            progressbar={percentage}
          />
          <MiniPlayer id={id} title={VideoTitle} />
        </>
      )}
    </>
  );
}
