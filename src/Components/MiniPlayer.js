import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Classes from '../Styles/MiniPlayer.module.css';
export default function MiniPlayer({ id, title }) {
  const miniPlayer = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function handleMiniPlayer() {
    if (!status) {
      miniPlayer.current.classList.remove(Classes.floatingBtn);
      setStatus(true);
    } else {
      miniPlayer.current.classList.add(Classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
      ref={miniPlayer}
      onClick={handleMiniPlayer}
    >
      <span className={`material-icons-outlined ${Classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${Classes.close}`}
        onClick={handleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer
        className={Classes.player}
        url={videoUrl}
        width='300px'
        height='168px'
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}
