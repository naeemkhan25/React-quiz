import Image from '../../assets/images/signup.svg';
import Classes from '../../Styles/Singup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import InputText from '../InputText';

export default function Singup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Illustration Alt='Signup'>{Image}</Illustration>
        <Form className={`${Classes.signup}`}>
          <InputText type='text' placeholder='Enter name' icon='person' />
          <InputText
            type='text'
            placeholder='Enter email'
            icon='alternate_email'
          />
          <InputText type='password' placeholder='Enter password' icon='lock' />
          <InputText
            type='password'
            placeholder='Confirm password'
            icon='lock_clock'
          />
          <Checkbox text='I agree to the Terms & Conditions' />
          <Button>Submit now</Button>
          <div class='info'>
            Already have an account? <a href='login.html'>Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
