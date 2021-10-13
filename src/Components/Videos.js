import { Link } from 'react-router-dom';
import Classes from '../Styles/Videos.module.css';
import Video from './Video';
export default function Videos() {
  return (
    <div className={Classes.videos}>
      <Link to='/quiz'>
        <Video />
      </Link>
      <Link to='/quiz'>
        <Video />
      </Link>
      <Link to='/quiz'>
        <Video />
      </Link>
      <Link to='/quiz'>
        <Video />
      </Link>
      <Link to='/quiz'>
        <Video />
      </Link>
      <Link to='/quiz'>
        <Video />
      </Link>
      <Link to='/quiz'>
        <Video />
      </Link>
    </div>
  );
}
