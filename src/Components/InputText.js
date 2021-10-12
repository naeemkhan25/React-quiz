import Classes from '../Styles/TextInput.module.css';

export default function InputText({ icon, ...rest }) {
  return (
    <div className={Classes.textInput}>
      <input {...rest} />
      <span className='material-icons-outlined'> {icon} </span>
    </div>
  );
}
