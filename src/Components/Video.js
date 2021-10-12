import VideoImage from '../assets/images/3.jpg';
import Classes from '../Styles/Video.module.css';

export default function Video() {
  return (
    <a href='quiz.html'>
      <div className={Classes.video}>
        <img src={VideoImage} alt='' />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={Classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
