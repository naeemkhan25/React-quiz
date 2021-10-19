import Classes from '../Styles/ProgressBar.module.css';
import Button from './Button';
export default function ProgressBar({ next, prev, progressbar, submitAnswer }) {
  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton} onClick={prev}>
        <span className='material-icons-outlined'> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className={Classes.tooltip}>{progressbar}% Cimplete!</div>
        <div className={Classes.rangeBody}>
          <div
            className={Classes.progress}
            style={{ width: `${progressbar}%` }}
          ></div>
        </div>
      </div>

      <Button
        className={Classes.next}
        onClick={progressbar === 100 ? submitAnswer : next}
      >
        <span>Next Question</span>
        <span className='material-icons-outlined'> arrow_forward </span>
      </Button>
    </div>
  );
}
