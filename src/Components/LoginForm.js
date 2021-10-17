import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Form from './Form';
import InputText from './InputText';

export default function LoginForm() {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      history.push('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to login!');
    }
  }

  return (
    <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
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

      <Button type='submit' disabled={loading}>
        Submit Now
      </Button>
      {error && <p className='error'>{error}</p>}
      <div className='info'>
        Don't have an account? <Link to='/singup'>Signup</Link> instead.
      </div>
    </Form>
  );
}
