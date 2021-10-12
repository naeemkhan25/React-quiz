import Cleasses from '../Styles/Button.module.css';

export default function Button({ children, ...rest }) {
  return (
    <div class={Cleasses.button} {...rest}>
      <span>{children}</span>
    </div>
  );
}
