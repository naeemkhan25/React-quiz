import Cleasses from '../Styles/Button.module.css';

export default function Button({ className, children, ...rest }) {
  return (
    <button className={`${Cleasses.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
