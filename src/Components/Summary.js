import Image from '../assets/images/success.png';
import Classes from '../Styles/Summary.module.css';

export default function Summary({ scores, noq }) {
  return (
    <div className={Classes.summary}>
      <div className={Classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={Classes.score}>
          Your score is <br />
          {scores} out of {noq * 5}
        </p>
      </div>

      <div className={Classes.badge}>
        <img src={Image} alt='Success' />
      </div>
    </div>
  );
}
