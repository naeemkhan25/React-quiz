import Classes from '../Styles/Layout.module.css';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={Classes.main}>
        <div className={Classes.container}>{children}</div>
      </main>
    </>
  );
}
