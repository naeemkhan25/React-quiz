import Classes from '../Styles/Illustration.module.css';
export default function Illustration({ Alt, children }) {
  return (
    <div className={Classes.illustration}>
      <img src={children} alt={Alt} />
    </div>
  );
}
