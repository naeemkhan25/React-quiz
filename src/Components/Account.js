import { Link } from 'react-router-dom';
import Classes from '../Styles/Account.module.css';

export default function Account() {
  return (
    <div className={Classes.account}>
      <span className='material-icons-outlined' title='Account'>
        account_circle
      </span>
      <Link to='/singup'>Signup</Link>
      <Link to='/login'>Login</Link>
      {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
}
