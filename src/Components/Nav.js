import Logo from '../assets/images/logo-bg.png';
import Classes from '../Styles/Nav.module.css';
import Account from './Account';
export default function Nav() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <a href='index.html' className={Classes.brand}>
            <img src={Logo} alt='Learn with Sumit Logo' />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
