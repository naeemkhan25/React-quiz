import Image from '../../assets/images/signup.svg';
import Illustration from '../Illustration';
import SingupForm from '../SingupForm';

export default function Singup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Illustration Alt='Signup'>{Image}</Illustration>
        <SingupForm />
      </div>
    </>
  );
}
