import { useRef, useState } from 'react';
import Classes from '../Styles/ProgressBar.module.css';
import Button from './Button';
export default function ProgressBar({ next, prev, progressbar, submitAnswer }) {
  const refToltip = useRef();
  const [toltipState, setToltipState] = useState(false);

  function handleToltip() {
    if (toltipState) {
      setToltipState(false);
      refToltip.current.style.display = 'none';
    } else {
      setToltipState(true);
      refToltip.current.style.left = `cal(${progressbar}% - 65px)`;
      refToltip.current.style.display = 'block';
    }
  }

  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton} onClick={prev}>
        <span className='material-icons-outlined'> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className={Classes.tooltip} ref={refToltip}>
          {progressbar}% Complete!
        </div>
        <div className={Classes.rangeBody}>
          <div
            className={Classes.progress}
            style={{ width: `${progressbar}%` }}
            onMouseOver={handleToltip}
            onMouseOut={handleToltip}
          ></div>
        </div>
      </div>

      <Button
        className={Classes.next}
        onClick={progressbar === 100 ? submitAnswer : next}
      >
        <span>{progressbar === 100 ? 'Submit Quiz' : 'Next Question'}</span>
        <span className='material-icons-outlined'> arrow_forward </span>
      </Button>
    </div>
  );
}
