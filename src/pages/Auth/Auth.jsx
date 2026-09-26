import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState('login');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (!email || !password) {
      setMessage('Please enter your email and password.');
      return;
    }

    if (mode === 'signup') {
      const name = formData.name.trim();

      if (!name) {
        setMessage('Please enter your name.');
        return;
      }

      const user = {
        name,
        email,
        password
      };

      localStorage.setItem(
        'demoUser',
        JSON.stringify(user)
      );

      setMessage(
        'Account created successfully. You can now log in.'
      );

      setMode('login');

      setFormData({
        name: '',
        email,
        password: ''
      });

      return;
    }

    const storedUser = localStorage.getItem('demoUser');

    if (!storedUser) {
      setMessage(
        'No demo account found. Please create an account first.'
      );
      return;
    }

    const user = JSON.parse(storedUser);

    if (
      user.email !== email ||
      user.password !== password
    ) {
      setMessage(
        'Incorrect email or password.'
      );
      return;
    }

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        name: user.name,
        email: user.email
      })
    );

    navigate('/');
  };

  return (
    <main className="auth">
      <div className="auth__container">

        <section className="auth__card">

          <div className="auth__header">
            <span className="auth__eyebrow">
              Local Markets
            </span>

            <h1>
              {mode === 'login'
                ? 'Welcome back'
                : 'Create your account'}
            </h1>

            <p>
              {mode === 'login'
                ? 'Sign in to continue exploring local markets.'
                : 'Create a demo account to personalize your experience.'}
            </p>
          </div>

          <form
            className="auth__form"
            onSubmit={handleSubmit}
          >

            {mode === 'signup' && (
              <div className="auth__field">
                <label htmlFor="auth-name">
                  Name
                </label>

                <input
                  id="auth-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="auth__field">
              <label htmlFor="auth-email">
                Email
              </label>

              <input
                id="auth-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="auth__field">
              <label htmlFor="auth-password">
                Password
              </label>

              <input
                id="auth-password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete={
                  mode === 'login'
                    ? 'current-password'
                    : 'new-password'
                }
              />
            </div>

            {message && (
              <p className="auth__message">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="auth__submit"
            >
              {mode === 'login'
                ? 'Log In'
                : 'Create Account'}
            </button>

          </form>

          <div className="auth__switch">
            <span>
              {mode === 'login'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </span>

            <button
              type="button"
              onClick={() => {
                setMode(
                  mode === 'login'
                    ? 'signup'
                    : 'login'
                );

                setMessage('');
              }}
            >
              {mode === 'login'
                ? 'Sign Up'
                : 'Log In'}
            </button>
          </div>

        </section>

      </div>
    </main>
  );
}

export default Auth;