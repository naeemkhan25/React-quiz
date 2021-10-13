import { Link } from 'react-router-dom';
import Image from '../../assets/images/login.svg';
import Classes from '../../Styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import InputText from '../InputText';

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className='column'>
        <Illustration Alt='Login'>{Image}</Illustration>
        <Form className={`${Classes.login}`}>
          <InputText
            type='text'
            placeholder='Enter email'
            icon='alternate_email'
          />

          <InputText type='password' placeholder='Enter password' icon='lock' />

          <Button>Submit Now</Button>

          <div className='info'>
            Don't have an account? <Link to='/singup'>Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
