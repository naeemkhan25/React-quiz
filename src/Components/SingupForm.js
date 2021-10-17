import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import InputText from './InputText';

export default function SingupForm() {
  const [userName, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password don't match");
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password, userName);
      history.push('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Faild to Create Account');
    }
  }
  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <InputText
        type='text'
        placeholder='Enter name'
        icon='person'
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputText
        type='text'
        placeholder='Enter email'
        icon='alternate_email'
        required
        value={email}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <InputText
        type='password'
        placeholder='Enter password'
        icon='lock'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputText
        type='password'
        placeholder='Confirm password'
        icon='lock_clock'
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        text='I agree to the Terms & Conditions'
        value={agree}
        required
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type='submit'>
        <span>Submit now</span>
      </Button>
      {error && <p className='error'>{error}</p>}
      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> instead.
      </div>
    </Form>
  );
}
