import Cleasses from '../Styles/Button.module.css';

export default function Button({ className, children, ...rest }) {
  return (
    <div className={`${Cleasses.button} ${className}`} {...rest}>
      {children}
    </div>
  );
}
